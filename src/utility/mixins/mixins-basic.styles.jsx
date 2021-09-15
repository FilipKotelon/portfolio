import { css } from 'styled-components';

import CssVars from '../variables.styles';

class BasicMixins {
  static responsive = {
    up: {
      xl: `(min-width: ${CssVars.breakpoints.up.xl})`,
      lg: `(min-width: ${CssVars.breakpoints.up.lg})`,
      md: `(min-width: ${CssVars.breakpoints.up.md})`,
      sm: `(min-width: ${CssVars.breakpoints.up.sm})`
    },
    down: {
      lg: `(max-width: ${CssVars.breakpoints.down.lg})`,
      md: `(max-width: ${CssVars.breakpoints.down.md})`,
      sm: `(max-width: ${CssVars.breakpoints.down.sm})`,
      xs: `(max-width: ${CssVars.breakpoints.down.xs})`
    }
  }
  
  static container = (type = 'default') => {
    let mediaQueries = ``;
    let containerCss = `
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    `;

    if(type === 'default'){
      mediaQueries = `
        @media ${this.responsive.up.sm} {
          max-width: 540px;
        }
        
        @media ${this.responsive.up.md} {
          max-width: 720px;
        }
        
        @media ${this.responsive.up.lg} {
          max-width: 960px;
        }
        
        @media ${this.responsive.up.xl} {
          max-width: 1140px;
        }
      `
    } else if(type === 'sm'){
      mediaQueries = `
        @media ${this.responsive.up.sm} and ${this.responsive.down.md} {
          max-width: 540px;
        }
        
        @media ${this.responsive.up.lg} {
          max-width: 920px;
        }
      `
    } else if(type === 'post'){
      mediaQueries = `
        @media ${this.responsive.up.sm} {
          max-width: 540px;
        }
        
        @media ${this.responsive.up.md} {
          max-width: 720px;
        }
        
        @media ${this.responsive.up.lg} {
          max-width: 950px;
        }
      `
    } else if(type === 'full'){
      containerCss = `
        padding-right: 50px;
        padding-left: 50px;
      `
    }

    return css`
      ${containerCss}
      ${mediaQueries}
    `
  }

  static laptopMedia =  `(max-width: 1400px) and (max-height: 800px) and(min-width: 1200px)`
  static ieMedia = `all and (-ms-high-contrast: none), (-ms-high-contrast: active)`
}

export default BasicMixins;