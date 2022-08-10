import React from 'react'
import Fruits from './Fruits';

function ListRendering() {
    const names = ['Apple','Mango','Papaya'];
    const nameList = names.map((name,index) => <h4 key={index}>{name}</h4>)

    const fruits = [
        {
            id: 1,
            name: 'Apple',
            cost: 150,
            origin: 'Africa'
        },
        {
            id: 2,
            name: 'Mango',
            cost: 100,
            origin: 'India'
        },
        {
            id: 3,
            name: 'Papaya',
            cost: 80,
            origin: 'Australia'
        }
   ]
    
   const fruitsList = fruits.map(fruit => <Fruits key={fruit.id} fruit={fruit} />)

    return (
        <div>
            <h3>List Rendering</h3>
            {nameList}
            {fruitsList}
        </div>
    )
}

export default ListRendering