import React, { Component } from 'react';
import Markdown from 'root/libs/markdown';
import HandLink from 'root/libs/handlink';
import ZoomBox from 'root/libs/zoombox';

export default class IlotPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            content: null
        };
        /* Load the markbook */
        import('root/ilots/' + props.extdata.ilot + '.md').then(content => {
            this.setState({ content: Markdown.html(Markdown.noRootPath(content)) });
        })
    }

    render() {
        return (
            <div>{this.state.content}</div>
        );
    }

    componentDidUpdate () {
        ZoomBox(this);
        HandLink.catch(this);
    }
}
