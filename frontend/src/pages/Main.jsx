import React from 'react'
import {Helmet} from "react-helmet";
import Home from '../companents/Home'
import Products from '../companents/Products';

function Main() {
  return (
    <>
       <Helmet>
       <link rel="icon" type="image/svg+xml" href="https://is.gd/ST59hF" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shopper</title>
       </Helmet>
      <Home/>
      <Products/>
    </>
  )
}

export default Main
