import React from 'react'

interface Prop{
    title: string
}

const ProductsList = ({title}: Prop) => {
  return (
    <section>{title}</section>
  )
}

export default ProductsList