import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import { FaBars } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from "../../modules/invitado/pages/Home";
import WeAre from "../../modules/invitado/pages/cosmetic/WeAre";
import CInicio from "../../modules/invitado/pages/cosmetic/CInicio";
import Contacto from "../../modules/invitado/pages/cosmetic/Contacto";
import Novage from "../../modules/invitado/pages/cosmetic/Novage";
import GiordaniGold from "../../modules/invitado/pages/cosmetic/GiordaniGold";
import TheOne from "../../modules/invitado/pages/cosmetic/TheOne";
import LoveNature from "../../modules/invitado/pages/cosmetic/LoveNature";
import OnColour from "../../modules/invitado/pages/cosmetic/OnColour";


function NavbarResponsiveInv() {
  return (
    <ResponsiveMenu
      menuOpenButton={<FaBars />}
      menuCloseButton={<FaBars />}
      changeMenuOn="500px"
      largeMenuClassName="large-menu-classname"
      smallMenuClassName="small-menu-classname"
      menu={
            <Router>
          <div className="bg-cosmetic-nav">
            <div className="col-md-12 image_logo">
              <img src="" alt="logo" />
            </div>
              <ul className="nav__cosmetic navbar-nav">

                    <li className='list__item' >  <NavLink to="/cosmetic" className='list__item-a'>Inicio</NavLink>  </li>               
                    <li className='list__item' >  <NavLink to="/cosmetic/we-are" className='list__item-a'>Aprende con Nosotros</NavLink>  </li>  
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Productos</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink to='/cosmetic/product/novage' className="dropdown-item" >Novage</NavLink>
                            <NavLink to='/cosmetic/product/giordani-gold' className="dropdown-item" >Giordani Gold</NavLink>
                            <NavLink to='/cosmetic/product/the-one' className="dropdown-item" >The One</NavLink>
                            <NavLink to='/cosmetic/product/love-nature' className="dropdown-item" >Love Nature</NavLink>
                            <NavLink to='/cosmetic/product/on-colour' className="dropdown-item" >OnColour</NavLink>
                        </div>
                    </li>         
                    <li className='list__item' >  <NavLink to="/cosmetic/products" className='list__item-a'>Productos</NavLink>  </li>    
                    <li className='list__item' >  <NavLink to="/cosmetic/events" className='list__item-a'>Eventos</NavLink>  </li>                                   
                    <li className='list__item' >  <NavLink to="/cosmetic/contact" className='list__item-a'>Contacto</NavLink>  </li>
                    <li className='list__item' >  <NavLink to="/cosmetic/comunidad" className='list__item-a'>#Comunidad</NavLink>  </li>                                   
                 
              </ul>
          </div>
          <Switch>
            <Route exact path="/cosmetic/product/novage" render={() => <Novage />} />
            <Route exact path="/cosmetic/product/giordani-gold" render={() => <GiordaniGold />} />
            <Route exact path="/cosmetic/product/the-one" render={() => <TheOne />} />
            <Route exact path="/cosmetic/product/love-nature" render={() => <LoveNature />} />
            <Route exact path="/cosmetic/product/on-colour" render={() => <OnColour />} />
            <Route exact path="/cosmetic/we-are" render={() => <WeAre />} />
            <Route exact path="/cosmetic/contact" render={() => <Contacto />} />
            <Route exact path="/cosmetic" render={() => <CInicio />} />
            <Route path="" Redirect={() => <CInicio />} />} />
          </Switch>
          <footer className="row">
              <div className="col-md-3">
                  <h2>PRODUCTOS</h2>
                  <NavLink to='/cosmetic/products/rostro'>Rostro</NavLink>
                  <NavLink to='/cosmetic/products/labios'>Labios</NavLink>
                  <NavLink to='/cosmetic/products/ojos'>Ojos</NavLink>
                  <NavLink to='/cosmetic/products/uñas'>Uñas</NavLink>
                  <NavLink to='/cosmetic/products/cabello'>Cabello</NavLink>
              </div>
              <div className="col-md-3">
                  <h2>TRABAJA CON NOSOTROS</h2>
                  <NavLink to='/cosmetic/contact'>Contáctanos</NavLink>
              </div>
              <div className="col-md-3">
                  <h2>NUESTRA OFICINA</h2>
                  <p>Calle Santa Marta 208 B - Arequipa</p>
                  <span>Referencia: Al costado de la Comisaria de Santa Marta</span>
              </div>
              <div className="col-md-3">
                  <h2>SIGUENOS EN NUESTRAS REDES SOCIALES</h2>
                  <a href="https://www.facebook.com"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                  <a href="https://www.facebook.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
          </footer>
        </Router>
      }
    />
  );
}

export default withRouter(NavbarResponsiveInv);
