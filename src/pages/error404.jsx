import React, { Component } from 'react';

export default class Error404 extends Component {

    render() {
        return (
            <div>
                <h1>Page introuvable</h1>
                <p>
                    Cette page n'existe pas ou plus.
                    Vous pouvez reprendre votre navigation
                    en cliquant sur une catégorie du menu
                    à gauche.
                </p>
            </div>
        );
    }
}
