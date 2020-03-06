import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class WeAre extends Component {
    render() {
        return (
            <main>
                <h2>Aprende con Nosotros</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/cosmetic/we-are/' >ga</NavLink>
                        </li>
                    </ul>
                </nav>
            </main>
        )
    }
}
