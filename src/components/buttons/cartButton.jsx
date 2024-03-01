import React from 'react'

const CartButton = (props)=> {
    
console.log(props)

  return (
    <>
    <button className='bg-orange'>Add {props.title} To Cart</button>
    </>
  )
}

export default CartButton