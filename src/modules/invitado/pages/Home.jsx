import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CarouselPortal from '../../../components/carousels/CarouselPortal';
import CardSocialMedia from '../../../components/cards/CardSocialMedia';
import CardCosmetic from '../../../components/cards/CardCosmetic';
import CardDesarrollo from '../../../components/cards/CardDesarrollo';

class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <CarouselPortal />
                <div className="row justify-content-center mt-5  bg-card">
                    <div className="col-md-4">
                        <CardSocialMedia />
                    </div>
                    <div className="col-md-4">
                        <CardDesarrollo />
                    </div>
                    <div className="col-md-4">
                        <CardCosmetic />
                    </div>
                </div>
            </div>
        );
    }
}

export default  withRouter(Home);