import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     p, span {
          font-family: 'Fira Sans', sans-serif;
     }

     h1, h2, h3, h4, h5, h6{
          font-family: 'Montserrat', sans-serif;
     }

     a,a:hover,a:focus {
          color: inherit;
          text-decoration: none;
          transition: all 0.3s;
     }

     @media (max-width: 1080px) {
          html {
               font-size: 93.75%;
          }
     }

     @media (max-width: 720px) {
          html {
               font-size: 87.5%;
          }
     }
`;

export default GlobalStyle;
