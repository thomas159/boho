import React from 'react'
import styled from 'styled-components'
import Container from '../atoms/Container'
import * as palette from '../atoms/Variables'
import media from '../atoms/Media'

const Wrap = styled.section`
  width: 100%;
  background: #282828;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px 0;
`

const Cell = styled.ul`
  flex: 0 0 100%;
  ${media.lg`
    flex: 0 0 25%;
  `}
`

const Top = styled.div`
  padding: 10px;
  color: #fff;
`

const Bottom = styled.div`
  height: auto;
  padding: 0 0 30px 0;
`

const Header = styled.li`
  padding: 10px;
  color: #fff;
  font-size: 20px;
`

const Sub = styled.li`
  padding: 10px;
  color: #fff;
  font-size: 18px;
`
const Footer = () => {
  const headers = [
    { name: 'Delivery and returns',
      subs: [
        { name: 'item1', text: 'this is the address'}
      ]
    },
    { name: 'Contact Us ',
      subs: [
        { name: 'item1', text: 'this is the address'}
      ]
    },
    { name: 'About Us',
    subs: [
      { name: 'item1', text: 'this is the address'}
    ]
  },
  { name: 'Legal',
  subs: [
    { name: 'item1', text: 'this is the address'},
    { name: 'item1', text: 'this is the address'}
  ]
},
  ]

  return(
    <Wrap>
      <Top>
        <Container>
          facebook instagram twitter etc etc
        </Container>
      </Top>

      <Bottom>
        <Container>
          <Grid>
            {headers.map(header =>
              <Cell key={header.name}>
                <Header>
                {header.name}
                </Header>
                {header.subs.map((sub, index) =>
                <Sub key={index}>
                  {sub.name}j
                </Sub>
                )}
              </Cell>
            )}
          </Grid>
        </Container>
      </Bottom>
    </Wrap>
    )
}

export default Footer
