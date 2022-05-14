import React, { Component } from 'react';

export default class RenderTitle extends Component {
    state = {
        title: "_"
    }
    componentDidMount() {
        let title = [
            '_',
            'L_',
            'LE_',
            'LEO_',
            'LEON_',
            'LEONA_',
            'LEONAR_',
            'LEONARD_',
            'LEONARDO_',
            'LEONARDO _',
            'LEONARDO Q_',
            'LEONARDO Q._',
        ]
        let i = 0
        setInterval(() => {
            i < title.length - 1 ? i++ : i = 0
            this.setState({ title: title[i] })
        }, 400)
    }
    render() {
        return (
            <>
                {this.state.title}
            </>
        );
    }
}
