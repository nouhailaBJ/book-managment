import React from 'react'
import Books from '../components/Books/Books'
import Categories from '../components/Categories/Categories'
import Slider from '../components/Slider/Slider'

function Home() {
  return (
    <>
        <Slider />
        <Categories />
        <Books />
    </>
  )
}

export default Home