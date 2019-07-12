import React from 'react'
import * as palette from '../Components/atoms/Variables'

export const ArrowRight = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 640 640" shapeRendering="geometricPrecision"
  textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
    <path fill={palette.button} d="M110.116-.012h160.537l259.231 320.024-259.231 320H110.116l259.243-320z"/>
  </svg>

export const ArrowLeft = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 640 640" shapeRendering="geometricPrecision"
  textRendering="geometricPrecision" imageRendering="optimizeQuality"
  fillRule="evenodd" clipRule="evenodd">
    <path fill={palette.button} fillRule="nonzero" d="M529.884-.012H369.347L110.116 320l259.231 320.012h160.537L270.641 320z"/>
  </svg>

export const ArrowLongDown = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 640 640" shapeRendering="geometricPrecision"
  textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
    <path d="M320 640L123.84 442.116h126.262V0H389.91v442.116h126.25z"/>
  </svg>

export const ArrowLongUp = () =>
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 640 640" shapeRendering="geometricPrecision"
textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
  <path d="M320-.012L123.84 197.873h126.262v442.139H389.91V197.873h126.25z"/>
</svg>

export const Seperator = () =>
  <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path fill="#37A1E8" d="M0 0 C 50 100 80 100 100 0 Z"></path>
  </svg>

export const DiagonalSeperator = () =>
  <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path fill="#DCDCDC" stroke="DCDCDC" d="M0 0 L50 100 L100 0 Z"></path>
    {/* <path fill="##2072a7" stroke="#2072a7"  d="M50 100 L100 40 L100 0 Z"></path> */}
  </svg>

export const FooterSeperator = () =>
  <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path fill="#fafafa" d="M0 0 C 50 100 80 100 100 0 Z"></path>
  </svg>

export const TitleSeperator = () =>
  <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path fill="#fafafa" d="M0 100 C 20 0 50 0 100 100 Z"></path>
  </svg>

export const Close = () =>
  <svg x="0px" y="0px" viewBox="0 0 42 42">
<g>
  <path d="M21,3c9.9,0,18,8.1,18,18s-8.1,18-18,18S3,30.9,3,21S11.1,3,21,3 M21,1C10,1,1,10,1,21s9,20,20,20c11,0,20-9,20-20
    S32,1,21,1L21,1z"/>
</g>
<line style={{fill:'none',stroke: '#000000', strokeWidth:2, strokeLinecap: 'round',strokeMiterlimit:10 }} x1="13" y1="29" x2="29" y2="13"/>
<line style={{fill:'none',stroke: '#000000', strokeWidth:2, strokeLinecap: 'round',strokeMiterlimit:10 }} x1="13" y1="13" x2="29" y2="29"/>
</svg>

export const Cart = () => {
  const st0 = { fill:'none',stroke: '#1D1D1B',strokeWidth: 3.2003, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }
  const st1 = { fill:'none',stroke: '#1D1D1B',strokeWidth: 1.6001, strokeLinejoin: 'round', strokeMiterlimit: 10 }
  const st2 = { fill:'none',stroke: '#1D1D1B',strokeWidth: 2.8503, strokeLinejoin: 'round', strokeMiterlimit: 10 }
  return(
   <svg x="0px"y="0px" viewBox="0 0 39.7 39.7">
    <polyline style={st0} points="4.5,4.9 8.5,4.9 14.4,24.4 32.8,22.2 35.3,9.7 10.5,9.7 "/>
    <line style={st1} x1="12.7" y1="16.4" x2="33.6" y2="16.4"/>
    <line style={st1} x1="19.8" y1="10.2" x2="19.8" y2="23.1"/>
    <line style={st1} x1="26.8" y1="10.2" x2="26.8" y2="22.5"/>
    <polyline style={st0} points="14.1,23.5 12.7,28.3 32.3,28.3 "/>
    <circle style={st2} cx="14.1" cy="33.5" r="1.3"/>
    <circle style={st2} cx="30.4" cy="33.5" r="1.3"/>
    </svg>
  )
}

export const Delivery = () => (
<svg version="1.1" x="0px" y="0px" viewBox="0 0 612 612">
<g>
	<g>
		<path d="M226.764,375.35c-28.249,0-51.078,22.91-51.078,51.16c0,28.166,22.829,51.078,51.078,51.078s51.078-22.912,51.078-51.078
			C277.841,398.26,255.013,375.35,226.764,375.35z M226.764,452.049c-14.125,0-25.54-11.498-25.54-25.541
			c0-14.123,11.415-25.539,25.54-25.539c14.124,0,25.539,11.416,25.539,25.539C252.302,440.551,240.888,452.049,226.764,452.049z
			 M612,337.561v54.541c0,13.605-11.029,24.635-24.636,24.635h-26.36c-4.763-32.684-32.929-57.812-66.927-57.812
			c-33.914,0-62.082,25.129-66.845,57.812H293.625c-4.763-32.684-32.93-57.812-66.845-57.812c-33.915,0-62.082,25.129-66.844,57.812
			h-33.012c-13.606,0-24.635-11.029-24.635-24.635v-54.541H612L612,337.561z M494.143,375.35c-28.249,0-51.16,22.91-51.16,51.16
			c0,28.166,22.912,51.078,51.16,51.078c28.166,0,51.077-22.912,51.077-51.078C545.22,398.26,522.309,375.35,494.143,375.35z
			 M494.143,452.049c-14.125,0-25.539-11.498-25.539-25.541c0-14.123,11.414-25.539,25.539-25.539
			c14.042,0,25.539,11.416,25.539,25.539C519.682,440.551,508.185,452.049,494.143,452.049z M602.293,282.637l-96.817-95.751
			c-6.159-6.077-14.453-9.526-23.076-9.526h-48.86v-18.313c0-13.631-11.004-24.635-24.635-24.635H126.907
			c-13.55,0-24.635,11.005-24.635,24.635v3.86L2.3,174.429l177.146,23.068L0,215.323l178.814,25.423L0,256.25l102.278,19.29
			l-0.007,48.403h509.712v-17.985C611.983,297.171,608.452,288.796,602.293,282.637z M560.084,285.839h-93.697
			c-2.135,0-3.86-1.724-3.86-3.859v-72.347c0-2.135,1.725-3.86,3.86-3.86h17.82c0.985,0,1.971,0.411,2.71,1.068l75.796,72.347
			C565.257,281.569,563.532,285.839,560.084,285.839z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
)