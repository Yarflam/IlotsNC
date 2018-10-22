import ReactDom from 'react-dom';
import tools from './tools';

export default new class HandLink {

    constructor () {
        this.history = null;
    }

    connect (history) {
        if(tools.isset(history)) {
            this.history = history;
        }
    }

    catch (component) {
        const node = ReactDom.findDOMNode(component);
        node.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.open(e.target.getAttribute('href'));
            });
        });
    }

    open (path) {
        if(this.history !== null) {
            this.history.push(path);
        } else {
            window.location.href = (
                path.length && path[0] == '/'
                ? '#' + path : path
            );
        }
    }

}
