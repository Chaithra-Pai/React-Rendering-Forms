import React from 'react'

function Fruits({fruit}) {
  return (
    <div>
        <h2>
            The {fruit.name} is from {fruit.origin}, cost is {fruit.cost}
        </h2>
    </div>
  )
}

export default Fruits
