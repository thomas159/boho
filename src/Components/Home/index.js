import React from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'
import Hero from './Hero'
import Img from '../atoms/Img'
import * as palette from '../atoms/Variables'
import LinkWrap from '../atoms/LinkWrap'
import Section from '../atoms/Section'
import Container from '../atoms/Container'
import Categories from '../Home/Categories'
import ShopBenefits from './ShopBenefits'
import TopProducts from './TopProducts'
import media from '../atoms/Media'
import H2 from '../atoms/H2'
import * as actionCreators from './actions'

const Wrap = styled.div`
  flex: 1;
`

const CatTitleWrap = styled.span`
  display: block;
  padding: 20px 0;
`

const CatTitle = styled.span`
  position: relative;
  font-size: 24px;
  text-transform: capitalize;
  width: auto;

  ${media.lg`
  &:before {
    content: "";
    position: absolute;
    border-bottom: 1px solid #b6b6b6;
    border-top: 1px solid #b6b6b6;
    height: 4px;
    background: 0 0;
    min-width: 100px;
    top: 10px;
    left: -150px;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    border-bottom: 1px solid #b6b6b6;
    border-top: 1px solid #b6b6b6;
    height: 4px;
    background: 0 0;
    min-width: 100px;
    top: 10px;
    right: -150px;
    z-index: 1;
  }
  `}
`

class Home extends React.Component {
  componentDidUpdate(prevProps) {
    const {  filteredProducts, filterOptions, products } = this.props
    const productFilter = products.filter(product => product.type.split(",").some(type => filterOptions.includes(type)))
    if(prevProps.filterOptions !== this.props.filterOptions) {
       this.props.setFilteredProducts(productFilter)
    }
  }
  render() {
    const {addType,  e, p, filterOptions, match, products } = this.props
    return(
      <Wrap>
        <Section >
            <Hero e={e} p={p} />
        </Section>

        <Section>
          <Container>
            <H2>Bags</H2>
          </Container>
          <Categories addType={addType} />
        </Section>
        <Section bg="#fff">
          <Container>
            <ShopBenefits />
          </Container>
        </Section>
        <Section>
          <Container>
            <H2>Top Products</H2>
            <TopProducts e={e} p={p} match={match} products={products} />
          </Container>
        </Section>


       {/*

        <Section>
          <Container>
          <CatTitleWrap><CatTitle>top categories</CatTitle></CatTitleWrap>
            <TopCategories e={e} p={p} subCategories={subCategories} />
          </Container>
        </Section>
        <Section>
          <Container>
            <CatTitle>top products</CatTitle>
          </Container>
        </Section> */}

      </Wrap>
    )
  }
}

const mapStateToProps = state => ({
  filterOptions: state.filters.types,
  filteredProducts: state.filteredProducts,
});

export default connect(mapStateToProps, actionCreators)(Home);