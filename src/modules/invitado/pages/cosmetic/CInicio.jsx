import React, { Component, Fragment } from "react";
import CarouselCosmetic from "../../../../components/carousels/CarouselCosmetic";
import { withRouter } from 'react-router-dom';
class CInicio extends Component {

    constructor(props) {
        super(props);
        
    }
    

  render() {
    return (
      <Fragment>
          <main className='mt-5'>
                <h1>Wen</h1>
                <CarouselCosmetic />
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-6">
                        <h2> <span>MAQUILLATE</span> EN LÍNEA </h2>
                        <p>PRUEBA NUESTRO MAQUILLAJE</p>
                        <p>Prueba tus productos favoritos! Y descrubre si ese color que tanto te gusta va contigo. ¡Con tan solo un click puedes probarlos todos!</p>
                        <button className="btn btn-success mt-5">VER PRODUCTOS</button>
                    </div>
                    <div className="col-md-6">
                        <img src="https://www.cosmeticosvogue.com.co/-/media/Feature/PageContent/Images/imagen_home.png?h=566&w=554&la=es-CO&hash=6E0479AFDA1084C4154DAC877AA1AB67F1CFD56B" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://www.cosmeticosvogue.com.co/-/media/Feature/PageContent/Images/7.jpg?h=400&w=400&la=es-CO&hash=AE1546BD4C35EF20E602FE0B9C94F278291B2196" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2>#SOY WENERA</h2>
                        <h3>ÚNETE A LA COMUNIDAD</h3>
                        <p>Es una comunidad de amigas apasionadas por el maquillaje y por la marca Vogue, que disfrutan aprender y compartir todo lo que saben a través de contenidos creativos que inspiren a los demás y los animen a resaltar su belleza.</p>
                        <button onClick={() => this.props.history.push('/cosmetic/comunidad')} >Uneté a la Comunidad</button>
                    </div>
                </div>
                <div className="row justify-content-center mt-5 bg-danger">
                    <div className="col-md-6">
                        <h2>INFORMACIÓN</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Nombres</label>
                                <input type="text" 
                                    className="form-control"
                                    placeholder="Wen"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">E-mail</label>
                                <input type="email" 
                                    className="form-control"
                                    placeholder="grommi.team@gmail.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Cel </label>
                                <input type="number" 
                                    className="form-control"
                                    placeholder="+51 982240796"
                                />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="5" className="form-control"
                                    placeholder='Comentarios'
                                ></textarea>
                            </div>
                            <button className="btn btn-success form-control">Enviar</button>
                        </form>
                    </div>
                </div>
          </main>
      </Fragment>
    );
  }
}
export default withRouter(CInicio)
