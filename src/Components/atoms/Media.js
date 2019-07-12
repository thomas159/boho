import { styled, css } from 'styled-components'

const sizes = {
  xl: 1400,
  lg: 1060,
  md: 768,
  sm: 500,
  xs: 400
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media