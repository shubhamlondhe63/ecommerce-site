import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductDetails from '../features/Product-Lists/components/ProductDetails';

function ProductDetailsPage() {
  return (
      <>
          <Navbar>
              <ProductDetails />
          </Navbar>
      </>
  )
}

export default ProductDetailsPage;