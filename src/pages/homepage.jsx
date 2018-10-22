import React, { Component } from 'react';
import IlotsBox from 'root/modules/ilotsbox';
import HandLink from 'root/libs/handlink';

export default class HomePage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            blocs: []
        };
    }

    render() {
        return (
            <div>
                <h1>Site des îlots de Nouvelle Calédonie</h1>
                <div className="alert text-justify">
                    ATTENTION : Le contenu de ce site n'est pas mise à jour depuis 2012.
                    Nous ne sommes pas responsable de l'utilisation
                    que vous en faites, les risques que vous prenez et
                    les informations que vous partagez.
                    Par ailleurs, le contenu proposé contient des informations obsolètes
                    par rapport à la législation maritime & terrestre en vigueur.
                    Nous vous invitons à vérifier ces informations auprès des
                    autorités compétentes de Nouvelle Calédonie.
                </div>
                <IlotsBox data={this.props.data} limit="5" />
            </div>
        );
    }
}
