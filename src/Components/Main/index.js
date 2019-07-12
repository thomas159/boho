import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import styled from 'styled-components'
import ScrollToTop from '../atoms/ScrollToTop'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../Home'
import * as actionCreators from './actions'
import media from '../atoms/Media'
import ProductsList from '../ProductsList'
import Product from '../Product'
import Alert from '../atoms/Alert'
import Delivery from '../Delivery'

import { ADD_TO_CART_E, ADD_TO_CART_P } from '../atoms/translations'

const Wrap = styled.div`
  position: relative;
`

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 80px);
  ${media.lg`
    min-height: calc(100vh - 50px);
  `}
`

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchSubCategories()
    this.props.fetchProducts()
  }

 handleHideAlert() {
    setTimeout(() => {
      this.props.hideAlert()
    }, 1000)
  }

  render() {
    const {alert, categories, language, products,  showAlert, subCategories} = this.props
    const e = language === 'english'
    const p = language === 'polish'
    return(
      <Router>
        <Wrap>
        {alert && <div><Alert />{this.handleHideAlert()}</div>}
        <Header e={e} p={p} categories={categories} subCategories={subCategories} language={language} />
          {/* <BreadCrumbs /> */}
          <Route style={{ flex: 1 }} render={({ location }) =>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames="page"
                mountOnEnter={true}
                unmountOnExit={true}
              >
                <MainWrap>
                  <Switch location={location}>
                    <Route exact path="/" render={props =>
                      <Home e={e} p={p}
                        categories={categories}
                        subCategories={subCategories}
                        products={products}
                        language={language}
                        {...props} />} />
                    <Route exact path="/delivery" component={Delivery}/>
                    <Route exact path="/dostawa" component={Delivery}/>
                    <Route exact path="/:catId" render={props => <ProductsList  e={e} p={p} categories={categories} subCategories={subCategories} products={products} language={language} {...props} />} />
                    <Route exact path="/:catId/:productId" render={props => <Product categories={categories} subCategories={subCategories} products={products} showAlert={showAlert} language={language} {...props} />} />
                  </Switch>
                </MainWrap>
              </CSSTransition>
            </TransitionGroup>
          } />
          <Footer />
        </Wrap>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  alert: state.ui.alert,
  language: state.language,
  categories: state.data.categories.isFetching ? [] : state.data.categories.items,
  subCategories: state.data.subCategories.isFetching ? [] : state.data.subCategories.items,
  products: state.data.products.isFetching ? [] : state.data.products.items,
  productsLoading: state.data.products.loadng,
});

export default connect(mapStateToProps, actionCreators)(Main);