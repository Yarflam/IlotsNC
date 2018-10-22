import React from 'react';
import { Route } from 'react-router-dom';

export default function RouterLayout ({ tpl, component, data, extdata}) {
    return (
        <Route render={(props) => {
            props.data = data||{};
            props.extdata = extdata||{};
            return React.createElement(tpl, props, React.createElement(component, props));
        }} />
    );
}
