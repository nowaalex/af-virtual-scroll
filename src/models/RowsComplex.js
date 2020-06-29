import { computed, action, reaction, observable } from "mobx";
import groupBy from "lodash/groupBy";
import mapValues from "lodash/mapValues";
import keyBy from "lodash/keyBy";
import times from "lodash/times";
import reduce from "lodash/reduce";
import toPairs from "lodash/toPairs";

const ALL_KEY = "ALL" + Math.random().toString( 36 );

class TotalsCachePart {

    constructor( rows, dataKey ){
        this.rows = rows;
        this.dataKey = dataKey;
    }

    @computed get count(){
        return this.rows.parent.rowCount;
    }

    @computed get sum(){
        let res = 0;
        const { rows: { columnsByDataKey, parent }, dataKey } = this;
        const col = columnsByDataKey[ dataKey ];
        const { getCellData, getRowData, rowCount } = parent;
        const fn = col.getCellData || getCellData;
        for( let i = 0, row, cellData; i < rowCount; i++ ){
            row = getRowData( i );
            cellData = fn( row, i, dataKey );
            res += cellData;
        }
        return res;
    }

    @computed get average(){
        return this.sum / this.count;
    }
};


/*

[
    [
        1,
        2,
        5,
        7,
        8
    ],
    [
        3,
        10,
        18
    ]
]
*/

class Aggregators {

    @observable
    filtersByDataKey = {};

    @computed get filtersList(){
        return toPairs( this.filtersByDataKey ).filter( p => p[ 1 ] );
    }

    @observable
    group = null;

    @observable
    sort = null;

    @action
    setFiltering( dataKey, value ){
        this.filtersByDataKey[ dataKey ] = value;
    }

    @action
    setSorting( v ){
        this.sort = typeof v === "function" ? v( this.sort ) : v;
    }

    @action
    setGrouping( v ){
        this.group = typeof v === "function" ? v( this.group ) : v;
    }
};

class RowsComplex {

    constructor( parent ){1
        this.parent = parent;

        this.dispose = reaction(
            () => this.aggregators.group,
            () => this.expandedGroups.clear()
        );
    }

    destructor(){
        this.dispose();
    }

    @action
    setExpandedState( v, boolFlag ){
        this.expandedGroups[ boolFlag ? "add" : "delete" ]( v );
    }

    @observable
    expandedGroups = new Set();

    @observable
    aggregators = new Aggregators();

    @computed get totalsCache(){
        return mapValues( this.parent.totals, ( v, k ) => new TotalsCachePart( this, k ) );
    }

    @computed get columnsByDataKey(){
        return keyBy( this.parent.columns, "dataKey" );
    }

    @computed get rowIndexesArray(){
        return times( this.parent.rowCount );
    }

    @computed get filtered(){

        const { columnsByDataKey, parent } = this;
        const { getCellData, getRowData } = parent;
        const { filtersList } = this.aggregators;

        if( !getCellData || !filtersList.length ){
            return this.rowIndexesArray;
        }

        return this.rowIndexesArray.filter( i => {
            const row = getRowData( i );
            return filtersList.every(([ dataKey, value ]) => {
                const col = columnsByDataKey[ dataKey ];
                const cellData = row && ( col.getCellData || getCellData )( row, i, dataKey );
                return cellData === undefined || ( "" + cellData ).toLowerCase().includes( value.toLowerCase() );
            });
        });
    }

    @computed get grouped(){

        const { group } = this.aggregators;

        if( !group || !group.dataKey ){
            return {
                [ALL_KEY]: this.filtered
            };
        }

        const { dataKey } = group;
        const { columnsByDataKey, parent } = this;
        const { getCellData, getRowData } = parent;

        const col = columnsByDataKey[ dataKey ];

        return groupBy( this.filtered, i => {
            const row = getRowData( i );
            const cellData = row && ( col.getCellData || getCellData )( row, i, dataKey );
            return cellData;
        });
    }

    @computed get sorted(){
        const { columnsByDataKey, aggregators: { sort }, parent } = this;

        if( sort && sort.dataKey ){
            const { dataKey, value } = sort;
            const { getCellData, getRowData } = parent;
            const col = columnsByDataKey[ dataKey ];
            const fn = col.getCellData || getCellData;
            const sign = value === "ascending" ? 1 : -1;
            return mapValues( this.grouped, v => v.sort(( a, b ) => {
                const row1 = getRowData( a );
                const row2 = getRowData( b );
                if( !row1 || !row2 ){
                    return 0;
                }
                const cell1 = fn( row1, a, dataKey );
                const cell2 = fn( row2, b, dataKey );
                if( cell1 > cell2 ){
                    return sign;
                }
                if( cell1 < cell2 ){
                    return -sign;
                }
                return 0;
            }));
        }
        
        return this.grouped;
    }

    @computed get flat(){
        return reduce( this.sorted, ( result, groupArr, groupName ) => {
            if( groupName !== ALL_KEY ){
                result.push( groupName );
            }
            if( this.expandedGroups.has( groupName ) || groupName === ALL_KEY ){
                result.push( ...groupArr );
            }
            return result;
        }, []);
    }

    @computed get visibleRowCount(){
        return this.flat.length;
    }
}

export default RowsComplex;