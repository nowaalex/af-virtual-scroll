import React from "react";
import sum from "lodash/sum";
import useApi from "../../../useApi";
import Colgroup from "../../common/Colgroup";

const SUBSCRIBE_EVENTS = [
    "#columns",
    "#scrollLeft",
    "#widgetWidth",
    "tbody-column-widths"
];

const TableWrapper = ({ children, ...props }) => {

    const { scrollLeft, columns, tbodyColumnWidths } = useApi( SUBSCRIBE_EVENTS );

    const style = {
        /* If we do this via transform translate, col background would have bugs during horizontal scroll. Strange webkit behavior */
        marginLeft: -scrollLeft,

        /* TODO: maybe box-sizing:border-box; is needed here? */
        width: sum( tbodyColumnWidths )
    };

    return (
        <table {...props} style={style} aria-colcount={columns.length}>
            <Colgroup useTbodyWidths />
            {children}
        </table>
    );
};

export default TableWrapper;