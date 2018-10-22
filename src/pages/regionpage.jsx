import React, { Component } from 'react';
import IlotsBox from 'root/modules/ilotsbox';
import Markdown from 'root/libs/markdown';
import HandLink from 'root/libs/handlink';
import ZoomBox from 'root/libs/zoombox';

export default class RegionPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            content: null,
            blocs: null
        };
    }

    render() {
        return (
            <div>
                {this.state.content}
                <IlotsBox data={this.props.extdata.children} limit="5" />
            </div>
        );
    }

    componentDidMount () {
        /* Load the markbook */
        import('root/regions/' + this.props.extdata.region + '.md').then(content => {
            this.setState({ content: Markdown.html(Markdown.noRootPath(content)) });
        });
    }

    componentDidUpdate () {
        ZoomBox(this);
        HandLink.catch(this);
    }
}
