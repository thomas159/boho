import React from 'react'
import styled from 'styled-components'
import * as palette from '../atoms/Variables'
import media from '../atoms/Media'
import ProductCard from '../Cards/ProductCard'

const Wrap = styled.div`
  flex: 1;
  ${media.lg`
    max-height: calc(100vh - 50px);
  `}
`

export default class Product extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { match, products, showAlert } = this.props
    return (
      <Wrap>
        {products && products.filter(products => products.slug === match.params.productId ).map(product =>
          <ProductCard key={product.id} showAlert={showAlert} {...product} />
        )}
      </Wrap>
    )
  }
}
