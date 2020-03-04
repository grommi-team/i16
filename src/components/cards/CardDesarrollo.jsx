import React from 'react'
import './Cards.css'
import { NavLink } from 'react-router-dom'
export default function CardDesarrollo() {
    return (
        <div class="container__i_card_sm">
            <div className="container__i_card_sm_image">
                <NavLink to='/dev'
                    className='link__image'
                >
                    <img src="https://neetwork.com/wp-content/uploads/2018/07/objetivos-de-marketing-1.png" 
                        alt="image"
                        className='image__card'
                    />
                    <span className='image__name-card' >Paginas Web</span>
                </NavLink>
            </div>
        </div>
    )
}