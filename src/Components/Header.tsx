import React from 'react'
import chefclaudeLogo from "../assets/chefclaude.jpg"

function Header() {
    function handleMouseOver(){
        console.log("I was hovered")
    }
  return (
    <header>
        <img
        src={chefclaudeLogo}
        alt="chef claude"
        onMouseOver={handleMouseOver}
        />
        <h1>Chef Claude</h1>
    </header>
  )
}

export default Header