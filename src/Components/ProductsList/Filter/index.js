import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actionCreators from './actions'
import * as palette from '../../atoms/Variables'
import Button from '../../atoms/Button'
import media from '../../atoms/Media'
import { ArrowLongUp, ArrowLongDown } from '../../../images'

const ShowDesktop = styled.div`
  display: none;
  ${media.lg`
    display: flex;
    flex-direction: row;
    margin: 0 5px;
    width: 100%;
  `}
`

const ShowMobile = styled.div`
  display: flex;
  width: 100%;
  ${media.lg`
    display: none;
  `}
`

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  background: #fff;
  height: 40px;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(158,158,158,1);
  border-top: 1px solid ${palette.green};
  ${media.lg`
    position: relative;
    height: auto;
    margin: 20px auto 10px auto;
    max-width: 1300px;
    background: inherit;
    box-shadow: none;
    border-top: 0px solid ${palette.green};
  `}
`

const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 7px 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  ${media.lg`
    padding: 0;
    background: ${palette.green};
    color: #fff;
    margin: 0 10px;
  `}
`

const Cell = styled.div`
  flex: 0 0 50%;
  &:nth-child(1) {
    border-right: 1px solid ${palette.green};
    flex-direction: row;
  }
  ${media.lg`
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    background: ${palette.green};
    margin-right 20px;
    border-radius: ${palette.borderRadius};
    &:nth-child(1) {
      border-right: 10px;
    }
  `}
`

const Option = styled.div`
  position: relative;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  padding: 10px;
  transition: all 200ms ease-in;
  cursor: pointer;
  border-radius: ${palette.borderRadius};
  ${({ active }) => active && `
    transition: all 200ms ease-in;
    background: ${palette.green};
    color: #fff;
  `}
`

const ColorOption = styled(Option)`
  position: relative;
  border-radius: ${palette.borderRadius};
  text-align: left;
`

const SortOption = styled(Option)`
  position: relative;
  border-radius: ${palette.borderRadius};
  text-align: left;
`

const SortOptionAsc = styled(Option)`
  position: relative;
  border-radius: ${palette.borderRadius};
  text-align: left;
  background: ${palette.green};
  color: #fff;
`

const SortOptionDsc = styled(Option)`
  position: relative;
  border-radius: ${palette.borderRadius};
  text-align: left;
  background: ${palette.green};
  color: #fff;

`


// const Color = styled.div`
//   position: absolute;
//   right: 5px;
//   top: 5px;
//   height: 24px;
//   width: 24px;
//   border-radius: 100%;
//   border: 1px solid #282828;
// `


const FilterCell = styled.div`
  display: flex;
  flex: 0 0 50%;
  padding: 3px;
  background: #fff;
  ${media.lg`
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    padding: 10px;
    &:last-child {
      border-radius: 0 ${palette.borderRadius} ${palette.borderRadius} 0;
    }
  `}
`

const FilterWrap = styled.div`
  width: 100%;
  background: #f5f5f5;
  border-radius: ${palette.borderRadius};
  ${media.lg`
    display: flex;
    width: auto;
    flex: 0 0 auto;

  `}
`

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 0 0 100%;
  padding: 10px;
`

const Bg = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  bottom: 40px;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  padding: 0 20px;
  ${media.lg`
    top: 110px;
    bottom: 0;
  `}
`

const FilterButton = styled(Button)`
  background: #fff;
  color: ${palette.green};
  height: 100%;
  font-weight: 700;
  ${({ active }) => active && `
    background: ${palette.green};
    color: #fff;
  `}
`

const ArrowWrap = styled.svg`
  height: 10px;
  width: 10px;
  margin-left: 5px;
  color: #fff;
`

class Filter extends React.Component {
  state = {
    showTab: ''
  }

  handleFilterTypes = typeOption => {
    this.props.filterOptions.includes(typeOption) ? this.props.removeType(typeOption) : this.props.addType(typeOption)
  }

  handleShowTab = id => {
    const stateId = this.state.showTab
    this.setState({
      showTab: id === stateId ? false : id
    })
  }

componentDidUpdate(prevProps) {
  const { filterOptions, match, products, setFilteredProducts } = this.props
  const productFilter = products.filter(product => product.type.split(",").some(type => filterOptions.includes(type)))
  const allProducts = products.map(products => products)

    if(prevProps.filterOptions !== this.props.filterOptions) {
      filterOptions.length >= 1 ? setFilteredProducts(productFilter) : setFilteredProducts(allProducts)
    }

    if(prevProps.sort !== this.props.sort && this.props.sort === 'sortAsc') {
      filterOptions.length >= 1 ? setFilteredProducts(productFilter.slice().sort((a,b) => a.name.localeCompare(b.name))) :
      setFilteredProducts(allProducts.slice().sort((a,b) => a.name.localeCompare(b.name)))
    } else if (prevProps.sort !== this.props.sort && this.props.sort === 'sortDsc') {
      filterOptions.length >= 1 ? setFilteredProducts(productFilter.slice().sort((a,b) => b.name.localeCompare(a.name))) :
      setFilteredProducts(allProducts.slice().sort((a,b) => b.name.localeCompare(a.name)))
    }
}

  render() {
    const { filterOptions, filteredProducts, match, e, p, sort } = this.props
    const bagOptions = ['crossbody','hobo', 'shoulder']
    const sortOptions = ['name']

    const { showTab } = this.state
    return(
      <Wrap>
        <ShowMobile>
          <Cell onClick={() => this.handleShowTab(1)}><FilterButton active={showTab === 1}>Filters</FilterButton></Cell>
          <Cell onClick={() => this.handleShowTab(2)}><FilterButton active={showTab === 2}>Sort by</FilterButton></Cell>
          {showTab === 1 &&
            <Bg>
            <FilterWrap>
                <FilterOptions>
                  <Title>Filter by Type</Title>
                  {bagOptions.map((bagOption,index) =>
                    <FilterCell key={index}>
                      <ColorOption active={filterOptions.includes(bagOption)}  onClick={()=> this.handleFilterTypes(bagOptions[index])}>
                        {bagOption}
                      </ColorOption>
                    </FilterCell>
                  )}
                </FilterOptions>
              </FilterWrap>
            </Bg>
          }

          {showTab === 2 &&
            <Bg>
0-
            </Bg>
          }
        </ShowMobile>

        <ShowDesktop>
        <Cell>
            <Title> Filter:</Title>
            <FilterWrap>
              {bagOptions.map((bagOption,index) =>
                <FilterCell key={index}>
                   <ColorOption active={filterOptions.includes(bagOption)}  onClick={()=> this.handleFilterTypes(bagOptions[index])}>
                      {bagOption}
                    </ColorOption>
                </FilterCell>
              )}
            </FilterWrap>
          </Cell>
          <Cell>
          <Title> Sort:</Title>
            <FilterWrap>
              {sortOptions.map((sortOption,index) =>
                <FilterCell key={index}>
                  {console.log(sort === 'sortDsc')}
                  {sort === '' &&
                    <SortOption onClick={()=> this.props.setSort('sortAsc')}>
                      {sortOption}
                    </SortOption>
                  }
                  {sort === 'sortAsc' &&
                    <SortOptionAsc active={sort === 'sortDsc'} onClick={()=> this.props.setSort('sortDsc')}>
                      {sortOption}
                      <ArrowWrap>
                        <ArrowLongUp />
                      </ArrowWrap>

                    </SortOptionAsc>
                  }
                    {sort === 'sortDsc' &&
                    <SortOptionDsc active={sort.includes('sortAsc')} onClick={()=> this.props.setSort('sortAsc')}>
                      {sortOption}
                      <ArrowWrap>
                        <ArrowLongDown />
                      </ArrowWrap>
                    </SortOptionDsc>
                  }
                </FilterCell>
              )}
            </FilterWrap>
          </Cell>
        </ShowDesktop>


      </Wrap>
    )
  }
}

const mapStateToProps = state => ({
  filteredProducts: state.filteredProducts,
  filterOptions: state.filters.types,
  sort: state.filters.sort

})

export default connect(mapStateToProps, actionCreators)(Filter);

{/* <Title>Filter by Colour</Title>
{bagOptions.map((colorOption,index) =>
  <FilterCell key={index}>{colorOption}</FilterCell>
)}
colour / sex / size /  sort price / name */}

// ${FilterCell}:nth-child(2) ${ColorOption} ${Color} {
//   background: ${palette.gold};
// }
// ${FilterCell}:nth-child(3) ${ColorOption} ${Color} {
//   background: ${palette.silver};
// }
// ${FilterCell}:nth-child(4) ${ColorOption} ${Color} {
//   background: ${palette.bronze};
// }
// ${FilterCell}:nth-child(5) ${ColorOption} ${Color} {
//   background: ${palette.platinum};
// }

// const productFilter = this.props.products.filter(products =>
//   products.cat === match.params.catId && filterOptions.includes(products.type))
// const allProducts = this.props.products.filter(products =>
//    products.cat === match.params.catId)