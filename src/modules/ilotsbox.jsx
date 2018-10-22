import React, { Component } from 'react';
import Markdown from 'root/libs/markdown';
import tools from 'root/libs/tools';
import HandLink from 'root/libs/handlink';

export default class IlotsBox extends Component {

    constructor (props) {
        super(props);
        this.state = {
            blocs: []
        };
        /* Temporary */
        this.tempBlocs = [];
        this.tempBlocsLen = 0;
    }

    render () {
        return (
            <div className="ui-metro">
                {this.state.blocs}
            </div>
        );
    }

    componentDidMount () {
        var ilots = this.getIlots(this.props.data);
        if(tools.isset(this.props.limit)) {
            const limit = Number(this.props.limit);
            const x = tools.randInt(0, ilots.length-limit-1);
            ilots = ilots.slice(x, x+limit);
        }
        ilots.forEach((item) => { this.showIlotBox(item, ilots.length); });
    }

    getIlots (items) {
        var output = [];
        (items||[]).forEach((item) => {
            if(tools.isset(item.ilot)) { output.push(item); }
            if(tools.isset(item.children)) {
                output = output.concat(this.getIlots(item.children));
            }
        });
        return output;
    }

    showIlotBox (item, lastItem) {
        /* Load the content */
        import('root/ilots/' + item.ilot + '.md').then(content => {
            var itemStyle = {};
            /* Look for image */
            const regex = 'src="(\./(photos|images|cartes)/[^"]+)"';
            const search = tools.preg_match_all(regex, Markdown.text(Markdown.noRootPath(content)));
            /* Get the last one (photos) */
            if(search.length) {
                itemStyle = {
                    backgroundImage: 'url("'+search[search.length-1][1]+'")'
                }
            }
            /* Add new block */
            this.tempBlocs.push(
                <div
                    key={this.tempBlocs.length}
                    style={itemStyle}
                    onClick={() => {
                        HandLink.open(item.realPath)
                    }}
                ><span>{item.title}</span></div>
            );
            /* Update */
            this.tempBlocsLen++;
            if(this.tempBlocsLen >= lastItem) {
                this.setState({ blocs: this.tempBlocs });
            }
        })
    }

}
