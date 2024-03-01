// import React from "react";
// //  what is props drilling and how do u avoid it
// // drawback watever comp passing tro data all te hcomp will be rendered 
// const cartButton = (props => {
//     console.log('hello props')
// })
// add navbar to ecommerece website weekend task
import React from 'react'
import CartButton from './cartButton'
import PreviewButton from './previewButton'

function buttonGroup(props) {
  console.log('props', props)
  return (
    <>
    <CartButton title={props.title}/>
    <PreviewButton/>
    </>
  )
}

export default buttonGroup