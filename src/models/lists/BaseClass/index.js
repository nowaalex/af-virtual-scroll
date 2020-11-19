import PubSub from "../../basic/PubSub";

import {
    START_INDEX,
    END_INDEX,
    SCROLL_TOP,
    ROWS_QUANTITY,
    OVERSCAN_ROWS_COUNT,
    WIDGET_WIDTH,
    WIDGET_HEIGHT,
    VIRTUAL_TOP_OFFSET,
    WIDGET_SCROLL_HEIGHT,
    ESTIMATED_ROW_HEIGHT,
    ROWS_CONTAINER_NODE,
    CACHED_ROWS_HEIGHT,
} from "constants/events";

class BaseClass extends PubSub {

    /* Provided from renderer */
    scrollTop = 0;
    rowsQuantity = 0;
    overscanRowsCount = 0;
    widgetHeight = 0;
    widgetWidth = 0;
    estimatedRowHeight = 0;
    rowsContainerNode = null;

    setScrollTop( v ){
        if( v !== this.scrollTop ){
            this.scrollTop = v;
            this.e( SCROLL_TOP );
        }
    }

    constructor(){
        super()

        this
            .on( this.updateStartIndex, SCROLL_TOP, CACHED_ROWS_HEIGHT, OVERSCAN_ROWS_COUNT )
            .on( this.updateEndIndex, ROWS_QUANTITY, SCROLL_TOP, WIDGET_HEIGHT, OVERSCAN_ROWS_COUNT, CACHED_ROWS_HEIGHT )
            .on( this.updateVirtualTopOffset, START_INDEX, CACHED_ROWS_HEIGHT );
    }

    updateStartIndex(){
        const v = Math.max( 0, this.getStartIndex() - this.overscanRowsCount );
        if( v !== this.startIndex ){
            this.startIndex = v;
            this.e( START_INDEX );
        }
    }

    updateEndIndex(){
        const v = Math.min( this.rowsQuantity, this.getEndIndex() + this.overscanRowsCount );
        if( v !== this.endIndex ){
            this.endIndex = v;
            this.e( END_INDEX );
        }
    }

    updateVirtualTopOffset(){
        const v = this.getVirtualTopOffset();
        if( v !== this.virtualTopOffset ){
            this.virtualTopOffset = v;
            this.e( VIRTUAL_TOP_OFFSET );
        }
    }

    setWidgetDimensions( width, height ){
        this.startBatch();
        if( width !== this.widgetWidth ){
            this.widgetWidth = width;
            this.e( WIDGET_WIDTH );
        }
        if( height !== this.widgetHeight ){
            this.widgetHeight = height;
            this.e( WIDGET_HEIGHT );
        }
        this.endBatch();
    }

    setViewParams( estimatedRowHeight, overscanRowsCount, rowsQuantity, rowsContainerNode ){
        this.startBatch();

        if( estimatedRowHeight !== this.estimatedRowHeight ){
            this.estimatedRowHeight = estimatedRowHeight;
            this.e( ESTIMATED_ROW_HEIGHT );
        }

        if( overscanRowsCount !== this.overscanRowsCount ){
            this.overscanRowsCount = overscanRowsCount;
            this.e( OVERSCAN_ROWS_COUNT );
        }

        if( rowsQuantity !== this.rowsQuantity ){
            this.rowsQuantity = rowsQuantity;
            this.e( ROWS_QUANTITY );
        }

        if( rowsContainerNode !== this.rowsContainerNode ){
            this.rowsContainerNode = rowsContainerNode;
            this.e( ROWS_CONTAINER_NODE );
        }

        this.endBatch();
    }

    /* Calculated inside model */
    renderedStartIndex = 0;
    startIndex = 0;
    endIndex = 0;
    virtualTopOffset = 0;
    widgetScrollHeight = 0;

    setRenderedStartIndex( v ){
        this.renderedStartIndex = v;
        /* No event needs to be emitted here; */
    }
}

export default BaseClass;