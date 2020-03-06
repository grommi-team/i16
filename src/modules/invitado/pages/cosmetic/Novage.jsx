import React, { Component } from 'react';
import CarouselGalery from '../../../../components/carousels/CarouselGalery';

class Novage extends Component {
    render() {
        return (
            <div>
                <h2>rostros</h2>
                <CarouselGalery />
                <h2>piel</h2>
                <CarouselGalery />
            </div>
        );
    }
}

export default Novage;