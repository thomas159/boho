import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import media from '../../atoms/Media'
import Img from '../../atoms/Img'
import ProductListCard from '../../Cards/ProductListCard'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 20px 0;
`

const Cell = styled.div`
  flex: 0 0 50%;
  padding: 10px;
  ${media.lg`
    flex: 0 0 25%;
  `}
`


const TopProducts = ({ e, p, match, products }) => {
  const items = ['austrian-cruelty-free-hbo-bag','art-boho','boho-vegan-leather-bag','bohemian-hobo-bag']
  return (
    <Container>
      <Wrap>
        {products && products.filter(products => items.includes(products.slug)).map(product =>
          <Cell key={product.id}>
            <ProductListCard e={e} p={p} match={match} {...product} />
          </Cell>
        )}
      </Wrap>
    </Container>
  )
}

export default TopProducts
// const TopCategories = ({ e, p, subCategories }) => (
//   <Container>
//     <Wrap>
//       {subCategories && subCategories.map(subCategory =>
//         <Cell key={subCategory.id}>
//           <HomeCatCard key={subCategory.id} e={e} p={p} {...subCategory} />
//         </Cell>
//       )}
//     </Wrap>
//   </Container>
// )
