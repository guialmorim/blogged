import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;700&display=swap');

     body {
          font-family: 'Fira Sans', sans-serif;
     }

     a,a:hover,a:focus {
          color: inherit;
          text-decoration: none;
          transition: all 0.3s;
     }
`;

export default GlobalStyle;
