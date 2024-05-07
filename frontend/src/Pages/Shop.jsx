import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/New collections/NewCollections'
import NewsLetter from '../Components/Newsletter/NewsLetter'

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
