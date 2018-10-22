import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import tools from 'root/libs/tools';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './theme.scss';

export default class Main extends Component {

    constructor (props) {
        super(props);
        this.state = {
            menu: props.data,
            page: props.extdata,
            drawer: false
        };
    }

    render() {
        return (
            <div className="Theme">
                <aside className={'Drawer ' + (this.state.drawer ? 'active':'') }>
                    <div className="MenuResponsive">
                        <IconButton
                            style={{ color: 'white' }}
                            aria-label="Menu"
                            onClick={(e) => {
                                this.setState({ drawer: !this.state.drawer });
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <PerfectScrollbar option={{ suppressScrollX: true }}>
                        <nav>
                            {this.showMenu(this.state.menu)}
                        </nav>
                    </PerfectScrollbar>
                </aside>
                <section className="MainView">
                    <PerfectScrollbar option={{ suppressScrollX: true }}>
                        <header>
                            <h1>Îlots de Nouvelle Calédonie</h1>
                        </header>
                        <article>
                            {this.props.children}
                        </article>
                    </PerfectScrollbar>
                </section>
            </div>
        );
    }

    /* Show the menu */
    showMenu (routes, path, nKey) {
        var output = [], link, linkClass, path = path||'', nKey = nKey>>0||0;
        routes.forEach((item, key) => {
            link = '', linkClass = [];
            /* Is active */
            if(
                tools.isset(this.state.page.parents) &&
                this.state.page.parents.indexOf(item.realPath) >= 0
            ) {
                linkClass.push('active');
            }
            /* Get the link */
            if(tools.isset(item.region)) {
                /* Région */
                link = <Link to={path + item.route} className={linkClass}>{item.title}</Link>;
            } else if(tools.isset(item.ilot)) {
                /* Îlots */
                link = <Link to={path + item.route} className={linkClass}>{item.title}</Link>;
            } else {
                /* Simple link */
                link = <Link to={path + item.route} className={linkClass}>{item.title}</Link>;
            }
            /* Enfants */
            if(tools.isset(item.children)) {
                output.push(
                    <li key={nKey+'/'+key}>
                        {link}
                        {this.showMenu(item.children, path + item.route, key)}
                    </li>
                );
            } else {
                output.push( <li key={nKey+'/'+key}>{link}</li> );
            }
        });
        return <ul>{output}</ul>;
    }
}
