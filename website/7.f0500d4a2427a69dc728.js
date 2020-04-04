/*! For license information please see 7.f0500d4a2427a69dc728.js.LICENSE.txt */
(window.Z=window.Z||[]).push([[7],{146:function(n,e,t){var a={"./list/simple.js":147,"./list/withFeatures.js":148,"./table/formatCells.js":149,"./table/headless.js":150,"./table/observableCells.js":151,"./table/scrollToRow.js":152,"./table/simple.js":153,"./table/sortable.js":154,"./table/sticky.js":155,"./table/styledColumns.js":156,"./table/totals.js":157,"./table/variableRowHeights.js":158};function o(n){var e=l(n);return t(e)}function l(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}o.keys=function(){return Object.keys(a)},o.resolve=l,n.exports=o,o.id=146},147:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport List from "af-virtual-scroll/lib/List";\n\nconst getRowData = index => `row ${index}`;\n\nconst SimpleList = ({ className }) => (\n    <List\n        fixedSize\n        className={className}\n        getRowData={getRowData}\n        rowCount={500000}\n    />\n);\n\nexport default SimpleList;'},148:function(n,e,t){"use strict";t.r(e),e.default='import React, { useRef } from "react";\nimport List from "af-virtual-scroll/lib/List";\nimport r from "lodash/random";\nimport times from "lodash/times";\nimport { css } from "@emotion/core";\n\nconst wrapperCss = css`\n    display: flex;\n    flex-flow: column nowrap;\n`;\n\nconst rowCount = 100000;\n\nconst heights = times( rowCount, () => r( 50, 250 ) );\n\nconst getRowData = index => (\n    <div style={{\n        lineHeight: `${heights[index]}px`,\n        borderTop: "1px solid #666",\n        background: `hsl(${r(0,360)},${r(30,80)}%,${r(30,80)}%)`\n    }}>\n        row{index}:&nbsp;{heights[index]}px\n    </div>\n);\n\nconst ListWithScrollToRowButton = ({ className }) => {\n\n    const dataRef = useRef();\n\n    const submitHandler = e => {\n        e.preventDefault();\n        const v = e.currentTarget.elements.scrollRow.value;\n        dataRef.current.scrollToRow( +v );\n    };\n\n    return (\n        <div css={wrapperCss} className={className}>\n            <form onSubmit={submitHandler}>\n                <label>\n                    Row:&nbsp;\n                    <input\n                        name="scrollRow"\n                        type="number"\n                        defaultValue="0"\n                    />\n                </label>\n                <button type="submit">\n                    Scroll\n                </button>\n            </form>\n            <List\n                dataRef={dataRef}\n                getRowData={getRowData}\n                rowCount={rowCount}\n            />\n        </div>\n    );\n};\n\nexport default ListWithScrollToRowButton;'},149:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/lib/Table";\nimport r from "lodash/random";\nimport times from "lodash/times";\nimport faker from "faker";\n\nconst DFMT = new Intl.DateTimeFormat();\nconst NFMT = new Intl.NumberFormat();\n\nconst columns = [\n    {\n        dataKey: "num",\n        label: "Numeric",\n        sort: "numeric",\n        format: cellData => NFMT.format( cellData ),\n    },\n    {\n        dataKey: "str",\n        label: "String",\n        sort: "locale"\n    },\n    {\n        dataKey: "timeStamp",\n        label: "Date",\n        format: cellData => DFMT.format( cellData ),\n        sort: "numeric"\n    }\n];\n\nconst rowCount = 5000;\n\nconst rows = times( rowCount, () => ({\n    num: r( 1, 20000 ) / 27,\n    str: faker.name.findName(),\n    timeStamp: r( 0, Date.now() )\n}));\n\nconst getRowData = index => rows[ index ];\n\nconst TableWithFormattedCell = ({ className }) => (\n    <Table\n        className={className}\n        getRowData={getRowData}\n        rowCount={rowCount}\n        columns={columns}\n    />\n);\n\nexport default TableWithFormattedCell;'},150:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/lib/Table";\n\nconst columns = [\n    {\n        dataKey: "a",\n        label: "a"\n    },\n    {\n        dataKey: "b",\n        label: "b"\n    },\n    {\n        dataKey: "c",\n        label: "c"\n    }\n];\n\nconst getRowData = index => ({\n    a: index,\n    b: `cell_b_row: ${index}`,\n    c: `cell_c_row: ${index}`\n})\n\nconst SimpleHeadlessTable = ({ className }) => (\n    <Table\n        className={className}\n        headless\n        getRowData={getRowData}\n        rowCount={500}\n        columns={columns}\n    />\n);\n\nexport default SimpleHeadlessTable;'},151:function(n,e,t){"use strict";t.r(e),e.default='import React, { memo, useEffect, useState, useCallback } from "react";\nimport { observable } from "mobx";\nimport { observer } from "mobx-react-lite";\nimport Table from "af-virtual-scroll/lib/Table";\nimport DefaultCellComponent from "af-virtual-scroll/lib/Table/common/Cell";\nimport r from "lodash/random";\nimport { css } from "@emotion/core";\n\nconst tableCss = css`\n    th { background: #fff; }\n`;\n\nconst hueBlockCss = css`\n    padding: 0.5em;\n    border-radius: 5px;\n`;\n\nconst renderHue = cellData => (\n    <div\n        css={hueBlockCss}\n        style={{ background: `hsl(${cellData},90%,70%)` }}\n    >\n        hue:&nbsp;{cellData}\n    </div>\n)\n\nconst columns = [\n    {\n        dataKey: "n1",\n        label: "N1",\n        width: 100,\n        render: renderHue\n    },\n    {\n        dataKey: "n2",\n        label: "N2",\n        width: 100,\n        render: renderHue\n    },\n    {\n        dataKey: "n3",\n        label: "N3",\n        width: 100,\n        render: renderHue\n    }\n];\n\nconst rowCount = 200;\n\nconst CellComponent = memo(observer(DefaultCellComponent))\n\nconst TableWithObservableRows = ({ className }) => {\n\n    const [ rows ] = useState(() => {\n        const r = observable([]);\n\n        for( let j = 0; j < rowCount; j++ ){\n            r.push({ n1: 0, n2: 0, n3: 0 });\n        }\n\n        return r;\n    });\n\n    /* useCallback prevents table from unnecessary rerenders */\n    const getRowData = useCallback( index => rows[ index ], [ rows ]);\n\n    useEffect(() => {\n        const intervalHandle = setInterval(() => {\n            for( let j = 0; j < 50; j++ ){\n                rows[r(0,rowCount-1)][ `n${r(1,3)}` ] = r( 0, 360 );\n            }\n        }, 1000 );\n\n        return () => {\n            clearInterval( intervalHandle );\n        };\n    }, [ rows ]);\n\n    return (\n        <Table\n            css={tableCss}\n            className={className}\n            useStickyIfPossible\n            fixedLayout\n            CellComponent={CellComponent}\n            getRowData={getRowData}\n            rowCount={rowCount}\n            columns={columns}\n        />\n    );\n};\n\nexport default TableWithObservableRows;'},152:function(n,e,t){"use strict";t.r(e),e.default='import React, { useRef } from "react";\nimport Table from "af-virtual-scroll/lib/Table";\nimport { css } from "@emotion/core";\n\nconst wrapperCss = css`\n    display: flex;\n    flex-flow: column nowrap;\n`;\n\nconst columns = [\n    {\n        dataKey: "a",\n        label: "a"\n    },\n    {\n        dataKey: "b",\n        label: "b"\n    },\n    {\n        dataKey: "c",\n        label: "c"\n    }\n];\n\nconst getRowData = index => ({\n    a: index,\n    b: `cell_b_row: ${index}`,\n    c: `cell_c_row: ${index}`\n})\n\nconst TableWithScrollToRowButton = ({ className }) => {\n\n    const dataRef = useRef();\n\n    const submitHandler = e => {\n        e.preventDefault();\n        const v = e.currentTarget.elements.scrollRow.value;\n        dataRef.current.scrollToRow( +v );\n    };\n\n    return (\n        <div css={wrapperCss} className={className}>\n            <form onSubmit={submitHandler}>\n                <label>\n                    Row:&nbsp;\n                    <input\n                        name="scrollRow"\n                        type="number"\n                        defaultValue="0"\n                    />\n                </label>\n                <button type="submit">\n                    Scroll\n                </button>\n            </form>\n            <Table\n                dataRef={dataRef}\n                getRowData={getRowData}\n                rowCount={50000}\n                columns={columns}\n            />\n        </div>\n    );\n};\n\nexport default TableWithScrollToRowButton;'},153:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/lib/Table";\n\nconst columns = [\n    {\n        dataKey: "a",\n        label: "a"\n    },\n    {\n        dataKey: "b",\n        label: "b"\n    },\n    {\n        dataKey: "c",\n        label: "c"\n    }\n];\n\nconst getRowData = index => ({\n    a: index,\n    b: `cell_b_row: ${index}`,\n    c: `cell_c_row: ${index}`\n})\n\nconst SimpleTable = ({ className }) => (\n    <Table\n        className={className}\n        getRowData={getRowData}\n        rowCount={500}\n        columns={columns}\n    />\n);\n\nexport default SimpleTable;'},154:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/lib/Table";\nimport r from "lodash/random";\nimport times from "lodash/times";\nimport faker from "faker";\n\nconst columns = [\n    {\n        dataKey: "num",\n        label: "Numeric",\n        sort: "numeric"\n    },\n    {\n        dataKey: "str",\n        label: "String",\n        sort: "locale"\n    }\n];\n\nconst rowCount = 5000;\n\nconst rows = times( rowCount, () => ({\n    num: r( 1, 20000 ),\n    str: faker.name.findName()\n}));\n\nconst getRowData = index => rows[ index ];\n\nconst SortableTable = ({ className }) => (\n    <Table\n        className={className}\n        getRowData={getRowData}\n        rowCount={rowCount}\n        columns={columns}\n    />\n);\n\nexport default SortableTable;'},155:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/lib/Table";\n\nconst columns = [\n    {\n        dataKey: "a",\n        label: "a"\n    },\n    {\n        dataKey: "b",\n        label: "b"\n    },\n    {\n        dataKey: "c",\n        label: "c"\n    }\n];\n\nconst getRowData = index => ({\n    a: index,\n    b: `cell_b_row: ${index}`,\n    c: `cell_c_row: ${index}`\n})\n\nconst SimpleTable = ({ className }) => (\n    <Table\n        className={className}\n        useStickyIfPossible\n        getRowData={getRowData}\n        rowCount={500}\n        columns={columns}\n    />\n);\n\nexport default SimpleTable;'},156:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/lib/Table";\nimport times from "lodash/times";\nimport range from "lodash/range";\nimport r from "lodash/random";\nimport { css } from "@emotion/core";\n\nconst wrapperCss = css`\n    table {\n        border-spacing: 0;\n    }\n    tfoot td, th {\n        padding: 0.5em;\n        background: #d6d6d6;\n        font-weight: bold;\n    }\n    tr[data-odd]{\n        background: rgba(0,0,0,0.2)\n    }\n`;\n\nconst colCount = 5;\n\nconst getRowExtraProps = ( rowData, rowDataIndex ) => rowDataIndex % 2 ? { "data-odd": "" } : null;\n\nconst columns = times( colCount, colIndex => ({\n    dataKey: `col${colIndex}`,\n    label: `col${colIndex}`,\n    background: `hsl(${Math.floor(360/colCount*colIndex)},80%,80%)`,\n    width: r( 50, 300 )\n}));\n\nconst getRowData = index => range( colCount ).reduce(( acc, colIndex ) => {\n    acc[ `col${colIndex}` ] = index;\n    return acc;\n}, {});\n\nconst totals = range( colCount ).reduce(( acc, colIndex ) => {\n    acc[ `col${colIndex}` ] = [ "count" ];\n    return acc;\n}, {});\n\nconst TableWithStyledColumns = ({ className }) => (\n    <Table\n        getRowExtraProps={getRowExtraProps}\n        css={wrapperCss}\n        className={className}\n        useStickyIfPossible\n        getRowData={getRowData}\n        rowCount={500}\n        totals={totals}\n        columns={columns}\n    />\n);\n\nexport default TableWithStyledColumns;'},157:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/lib/Table";\nimport r from "lodash/random";\nimport times from "lodash/times";\n\nconst columns = [\n    { dataKey: "n1", label: "N1" },\n    { dataKey: "n2", label: "N2" },\n    { dataKey: "n3", label: "N3" },\n    { dataKey: "n4", label: "N4" },\n];\n\nconst rowCount = 5000;\n\nconst rows = times( rowCount, () => ({\n    n1: r( 1, 20000 ),\n    n2: r( 1, 20000 ),\n    n3: r( 1, 20000 ),\n    n4: r( 1, 20000 )\n}));\n\nconst totals = {\n    n1: [ "count" ],\n    n2: [ "sum", "max" ],\n    n3: [ "average", "min" ],\n    n4: [ "count", "sum", "average" ]\n};\n\nconst getRowData = index => rows[ index ];\n\nconst TableWithTotals = ({ className }) => (\n    <Table\n        className={className}\n        getRowData={getRowData}\n        rowCount={rowCount}\n        columns={columns}\n        totals={totals}\n    />\n);\n\nexport default TableWithTotals;'},158:function(n,e,t){"use strict";t.r(e),e.default='import React from "react";\nimport Table from "af-virtual-scroll/src/Table";\nimport r from "lodash/random";\nimport times from "lodash/times";\nimport faker from "faker";\nimport { css } from "@emotion/core";\n\nconst tableCss = css`\n    th, tfoot td {\n        background: #fff;\n    }\n`;\n\nconst columns = [\n    {\n        dataKey: "rowIndex",\n        label: "Row index",\n        getCellData: ( rowData, i ) => i\n    },\n    {\n        dataKey: "num",\n        label: "Numeric",\n        sort: "numeric"\n    },\n    {\n        dataKey: "str",\n        label: "String",\n        sort: "locale"\n    },\n    {\n        dataKey: "rect",\n        label: "Rectangle",\n        render: cellData => (\n            <div style={{\n                lineHeight: `${cellData}px`,\n                background: `hsl(${r(0,360)},50%,50%)`\n            }}>\n                height: {cellData}px\n            </div>\n        )\n    }\n];\n\nconst rowCount = 100000;\n\nconst rows = times( rowCount, () => ({\n    num: r( 1, 20000 ),\n    str: faker.name.findName(),\n    rect: r( 50, 250 )\n}));\n\nconst getRowData = index => rows[ index ];\n\nconst totals = {\n    num: [ "sum", "count" ]\n};\n\nconst VariableRowHeightsTable = ({ className }) => (\n    <Table\n        css={tableCss}\n        className={className}\n        useStickyIfPossible\n        totals={totals}\n        getRowData={getRowData}\n        rowCount={rowCount}\n        columns={columns}\n    />\n);\n\nexport default VariableRowHeightsTable;'},159:function(n,e,t){var a={"./list/simple.js":[206,0,1,15],"./list/withFeatures.js":[209,0,4,1,13],"./table/formatCells.js":[212,5,0,2,4,1,3,19],"./table/headless.js":[1262,0,2,1,3,20],"./table/observableCells.js":[1263,0,2,12,1,3,21],"./table/scrollToRow.js":[1266,0,2,1,3,22],"./table/simple.js":[1267,0,2,1,3,23],"./table/sortable.js":[1268,5,0,2,4,1,3,24],"./table/sticky.js":[1269,0,2,1,3,25],"./table/styledColumns.js":[1270,0,2,4,1,3,14],"./table/totals.js":[1274,0,2,4,1,3,26],"./table/variableRowHeights.js":[1275,5,0,2,4,27]};function o(n){if(!t.o(a,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[n],o=e[0];return Promise.all(e.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(a)},o.id=159,n.exports=o},84:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return m}));var a=t(105),o=t.n(a),l=t(0),r=t(146),s=t(159),c=s.keys().reduce((function(n,e){return o()(n,e.slice(2,-3).split("/"),e.slice(2,-3))}),{}),i=s.keys().reduce((function(n,e){return n[e.slice(2,-3)]=[Object(l.lazy)((function(){return s(e)})),r(e).default,e.slice(2,-3)],n}),{}),m=function n(e,t){var a,o,l=function(l){"object"==typeof(a=e[l])?((o=t.find((function(n){return n.name===l})))||(o={name:l,children:[]},t.push(o)),n(a,o.children)):t.push({name:l,path:"/examples/"+a})};for(var r in e)l(r);return t}(c,[])}}]);
//# sourceMappingURL=sm.7.69b71a313604758142ddf46a31a16544.map