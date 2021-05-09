import { useState, useEffect, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import cx from "utils/cx";
import { observe, unobserve } from "utils/heightObserver";
import HeightProvider from "./HeightProvider";
import VariableHeightsModel from "models/VariableSizeList";
import FixedHeightsModel from "models/FixedSizeList";
import css from "./style.module.scss";

const Container = ({
    rowsQuantity,
    children,
    as: Component,
    fixed,
    estimatedRowHeight,
    overscanRowsCount,
    dataRef,
    onRangeEndMove,
    className,
    ...props
}) => {
    
    const [ scrollNode, setScrollNode ] = useState( null );
    const [ model ] = useState(() => new ( fixed ? FixedHeightsModel : VariableHeightsModel ));

    useImperativeHandle( dataRef, () => model, []);

    useEffect(() => {
        if( scrollNode ){
            model.setScrollContainerNode( scrollNode );
            observe( scrollNode, model.setWidgetHeight );

            return () => unobserve( scrollNode );
        }
    }, [ scrollNode ]);

    useEffect(() => {
        model.setParams( estimatedRowHeight, overscanRowsCount, rowsQuantity, onRangeEndMove );
    });

    useEffect(() => () => model.destructor(), []);
    
    /*
        tabIndex="0" is for proper keyboard nav
        https://bugzilla.mozilla.org/show_bug.cgi?id=1346159
    */
    return (
        <Component
            {...props}
            tabIndex="0"
            className={cx(css.wrapper,className)}
            ref={setScrollNode}
            onScroll={e => model.setScrollTop( e.target.scrollTop )}
        >
            <HeightProvider model={model} />
            {children( model )}
        </Component>
    );
};

Container.propTypes = {
    rowsQuantity: PropTypes.number.isRequired,
    Container: PropTypes.elementType,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    overscanRowsCount: PropTypes.number,
    estimatedRowHeight: PropTypes.number,
    onRangeEndMove: PropTypes.func,
}

/* This object is used in documentation, do not remove */
Container.defaultProps = {
    as: "div",
    fixed: false,
    estimatedRowHeight: 20,
    overscanRowsCount: 2,
}

export default Container;