import React from 'react'
import styled from 'styled-components'
import * as actionCreators from './actions'
import * as palette from '../atoms/Variables'
import LinkWrap from '../atoms/LinkWrap'
import Section from '../atoms/Section'
import ProductCard from '../Cards/ProductCard'
import ProductListCard from '../Cards/ProductListCard'
import Modal from '../atoms/Modal'
import Filter from './Filter'
import media from '../atoms/Media'
import Container from '../atoms/Container'
import { connect } from "react-redux";


const Wrap = styled.div`

`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
`

const Cell = styled.div`
  flex: 0 0 50%;
  padding: 4px;
  ${media.lg`
    flex: 0 0 25%;
  `}
`

const Filters = styled.div`
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  z-index: 5;
  ${media.lg`
    position: relative;
  `}
`

class ProductsList extends React.Component {

  componentDidUpdate(prevProps) {
  const english =  this.props.categories && this.props.categories.filter(categorys => (categorys.slug === this.props.match.params.catId || categorys.slugP === this.props.match.params.catId ))
  .map(category => category.slug)
  const polish =  this.props.categories && this.props.categories.filter(categorys => (categorys.slug === this.props.match.params.catId || categorys.slugP === this.props.match.params.catId ))
  .map(category => category.slugP)
  {(prevProps.language !== this.props.language && this.props.language === 'english') && this.props.history.push(`/${english}`)}
  {(prevProps.language !== this.props.language && this.props.language === 'polish') && this.props.history.push(`/${polish}`)}
  }

  render() {
    const { e, p, filteredProducts, match, products } = this.props
    console.log(' filteredProducts', filteredProducts)
    return(
      <Section bg={`${palette.lightBlue}`}>
        <Filters>
          <Filter match={match} products={products} />
        </Filters>
        <Container>
          <Grid>
             {filteredProducts.length >= 1
             ?
                filteredProducts.map(filteredProduct =>
                <Cell key={filteredProduct.id}>
                  <ProductListCard e={e} p={p} match={match} {...filteredProduct} />
                </Cell>
                 )
              :
                products && products.map(product =>
                <Cell key={product.id}>
                  <ProductListCard e={e} p={p} match={match} {...product} />
                </Cell>
                )
              }

            {/* {console.log('products list',products)} */}
          </Grid>
        </Container>

      </Section>
    )
  }
}

const mapStateToProps = state => ({
  filteredProducts: state.filteredProducts
});

export default connect(mapStateToProps, actionCreators)(ProductsList);

// {products && products.filter(products => (filteredColors.length >= 1 || filteredSizes.length >=1)
//   ? (filteredColors.includes(products.color) || filteredSizes.includes(products.size)) : products.cat === match.params.subCatId)


// handleSortName = (name, type) => {
  //   const sortAsc = name.slice().sort((a,b) => a.name.localeCompare(b.name))
  //   const sortDesc = name.slice().sort((a,b) => b.name.localeCompare(a.name))
  //   this.setState({
  //     sorted: type ? sortAsc : sortDesc,
  //     sort: true,
  //   })
  // }

  // handleSortPrice = (price, type) => {
  //   const sortAsc = price.slice().sort((a,b) => (parseFloat(a.unitPrice) - parseFloat(b.unitPrice)))
  //   const sortDesc = price.slice().sort((a,b) => (parseFloat(b.unitPrice) - parseFloat(a.unitPrice)))
  //   this.setState({
  //     sorted: type ? sortAsc : sortDesc,
  //     sort: true,
  //   })
  // }

   {/* {this.props.setFilteredProducts(...productFilter)} */}

            {/* <button onClick={ ()=>this.props.filteredProducts('ddd')} ></button> */}
            {/* {console.log(this.props.filteredProducts)} */}
          {/* {this.handleFilter()} */}

          // componentDidUMount(prevProps) {
  //   this.handleFilter()
  // }

  // handleFilter = (prevProps) => {
  //   const { e, p, filteredColors, filteredSizes,  match, products } = this.props
  //   const productFilter = products && products.filter(products =>
  //     (
  //       (filteredColors.length >= 1 && filteredSizes.length < 1 && products.cat === match.params.subCatId) && filteredColors.includes(products.color) ||
  //       (filteredSizes.length >= 1 && filteredColors.length < 1 && products.cat === match.params.subCatId) && filteredSizes.includes(products.size) ||

  //       (filteredSizes.length >= 1 && filteredColors.length >= 1 && products.cat === match.params.subCatId) && filteredColors.includes(products.color) && filteredSizes.includes(products.size)) ||
  //       (filteredSizes.length < 1 && filteredColors.length < 1 && products.cat === match.params.subCatId)
  //     )
  //      this.props.setFilteredProducts(productFilter)
  //   console.log(this.props.filteredProducts)
  // }