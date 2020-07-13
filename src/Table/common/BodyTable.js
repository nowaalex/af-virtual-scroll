import React from "react";
import { observer } from "mobx-react-lite";
import useApi from "../../useApi";

const BodyTable = ({ children }) => {

    const API = useApi();

    return (
        <table
            children={children}
            className="afvscr-main-table"
            aria-rowcount={API.Rows.visibleRowCount}
            aria-colcount={API.columns.length}
        />
    );
};

export default observer( BodyTable );