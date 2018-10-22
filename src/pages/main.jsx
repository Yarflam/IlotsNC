import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import RouterLayout from 'root/libs/routerlayout';
import RoutesJson from 'root/routes.json';
import tools from 'root/libs/tools';
/* Layouts */
import Theme from 'root/layouts/theme';
/* Pages */
import HomePage from './homepage';
import RegionPage from './regionpage';
import IlotPage from './ilotpage';
import Error404 from './error404';

/* Preload pages */
const pages = { HomePage, RegionPage, IlotPage, Error404 };

export default class Main extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <Switch>
                {this.genRoutes(RoutesJson)}
                <RouterLayout component={Error404} tpl={Theme} data={RoutesJson} />
            </Switch>
        );
    }

    /* Generate the routes */
    genRoutes (routes, path, nKey, parents) {
        var output = [], path = path||'', nKey = nKey>>0||0, parents = parents||[];
        routes.forEach((item, key) => {
            /* Set the real path */
            item.realPath = path + item.route;
            item.parents = parents.concat(path + item.route);
            /* Switch between Regions, Ilots or others */
            if(
                tools.isset(item.region) ||
                tools.isset(item.ilot) ||
                tools.isset(item.tpl)
            ) {
                output.push(<RouterLayout exact
                    path={path + item.route}
                    component={pages[(
                        tools.isset(item.region) ? 'RegionPage'
                        : tools.isset(item.ilot) ? 'IlotPage'
                        : item.tpl
                    )]}
                    tpl={Theme}
                    data={RoutesJson}
                    extdata={item}
                    key={nKey+'/'+key}
                />);
            }
            /* Enfants */
            if(tools.isset(item.children)) {
                output = output.concat(
                    this.genRoutes(item.children, path + item.route, key, item.parents)
                );
            }
        });
        return output;
    }
}
