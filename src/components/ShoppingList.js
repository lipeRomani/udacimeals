import React from 'react'
import FaCutlery from 'react-icons/lib/fa/cutlery'

export default function ShoppingList ({myRecipes}) {
  return (
    <div className='ingredients-list'>
      <h3 className='subheader'>
        Your Shopping List
      </h3>
      
      <ul>
      {
        Object.keys(myRecipes).map(label => (
          <div key={label}>
            <h4><FaCutlery /> {label}</h4>
            <ul>
            {myRecipes[label].map(item => (
              <li key={item}>
                {item}
              </li>
            ))}
            </ul>
          </div>
        ))
      }
      </ul>
    </div>
  )
}