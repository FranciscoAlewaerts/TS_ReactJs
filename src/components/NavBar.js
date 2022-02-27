import React from "react"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header>
            <h1>TIENDA SPORTS</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#" className="txtNav">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="txtNav">CATEGORIAS</a>
                    </li>
                    <li>
                        <a href="#" className="txtNav">CONTACTOS</a>
                    </li>
                    <li>
                    < CartWidget />
                    </li>
                </ul>
                
                
                
            </nav>
        </header>
    )
}

export default NavBar
