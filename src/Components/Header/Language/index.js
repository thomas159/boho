import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import * as actionCreators from './actions'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin-left: 10px;
`

const FlagWrap = styled.span`
  margin: 0 5px 0 0;
  border: 1px solid #000;
  &:nth-child(2) {
    margin: 0;
  }
`

const Flag = styled.img`
  width: 28px;
  height: 18px;
  cursor: pointer;
`

const Language = ({ setLanguage }) => (
  <Wrap>
    <FlagWrap onClick={()=>setLanguage('english')}>
      <Flag src={require('../../../images/unitedKingdomFlag.png')} />
    </FlagWrap>
    <FlagWrap onClick={()=>setLanguage('polish')}>
      <Flag src={require('../../../images/polandFlag.png')} />
    </FlagWrap>
  </Wrap>
)

const mapStateToProps = state => ({
  language: state.language
});

export default connect(mapStateToProps, actionCreators)(Language);