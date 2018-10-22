import ReactDom from 'react-dom';
import HandLink from './handlink';
import tools from './tools';

export default function ZoomBox (component) {
    const node = ReactDom.findDOMNode(component);
    /* Show image */
    const maxZoom = '10px';
    const zoom = (path) => {
        /* Embed */
        const embed = document.createElement('div');
        tools.forEach({
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
            zIndex: 3
        }, (key, value) => { embed.style[key] = value; });
        /* Picture */
        const content = document.createElement('div');
        tools.forEach({
            position: 'absolute',
            top: maxZoom, left: maxZoom,
            right: maxZoom, bottom: maxZoom,
            backgroundImage: 'url("' + path + '")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain'
        }, (key, value) => { content.style[key] = value; });
        /* Insert */
        embed.appendChild(content);
        document.querySelector('body').appendChild(embed);
        /* Event Remove */
        embed.addEventListener('click', () => {
            embed.parentNode.removeChild(embed);
        });
    };
    /* For each image */
    node.querySelectorAll('img').forEach(item => {
        /* Add cursor and event */
        item.style.cursor = 'zoom-in';
        item.addEventListener('click', (e) => {
            zoom(e.target.getAttribute('src'));
        });
    });
}
