import React from 'react'
import { MenuList } from '../Helper/menüList'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem,key)=>{
              return <div className='menuItem'>
                <div> <img src={menuItem.image} alt=" "/>
                <h3>{menuItem.name}</h3>
                <p>{menuItem.price} TL</p>
                </div>
              </div>
            })}
        </div>
    </div>
  )
}

export default Menu