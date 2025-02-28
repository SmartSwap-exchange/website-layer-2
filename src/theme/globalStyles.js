import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Media from './../theme/media-breackpoint'; 

var Gs = {}
 
Gs.GlobalStyle = createGlobalStyle`
  body {
    background: #0d0e13;
    margin: 0 auto;
    color: #fff;
    font-family: "Montserrat", monospace;
  }

`

export default Gs; 

