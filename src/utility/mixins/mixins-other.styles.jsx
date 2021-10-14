import { css } from 'styled-components';

import CssVars from '../variables.styles';
import FlexMixins from './mixins-flex.styles';

class OtherMixins {
  static defaultAfter = css`
    content: "";
    display: block;
    position: absolute;
  `
  static absCenterY = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `
  static absCenterX = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `
  static absCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    bottom: initial;
    right: initial;
    transform: translate(-50%, -50%);
  `
  static abs = ({left, top, right, bottom}) => css`
    position: absolute;
    ${left    ? `left: ${left};`      : null}
    ${top     ? `top: ${top};`        : null}
    ${right   ? `right: ${right};`    : null}
    ${bottom  ? `bottom: ${bottom};`  : null}
  `

  static fixCenterY = css`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
  `
  static fixCenterX = css`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  `
  static fixCenter = css`
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: initial;
    right: initial;
    transform: translate(-50%, -50%);
  `
  static fix = ({left, top, right, bottom}) => css`
    position: fixed;
    ${left    ? `left: ${left};`      : null}
    ${top     ? `top: ${top};`        : null}
    ${right   ? `right: ${right};`    : null}
    ${bottom  ? `bottom: ${bottom};`  : null}
  `

  static square = (length) => css`
    width: ${length};
    height: ${length};
  `
  static circle = (length) => css`
    ${FlexMixins.display({center: true})}
    ${this.square(length)}
    border-radius: 50%;
  `
  static rect = ({w, h}) => css`
    width: ${w};
    height: ${h};
  `
  static maxRect = ({w, h}) => css`
    max-width: ${w};
    max-height: ${h};
  `

  static autoFill = ({bg, color}) => css`
    &:-webkit-autofill{
      &, &:hover, &:focus{
        -webkit-text-fill-color: ${color};
        -webkit-box-shadow: 0 0 0px 1000px ${bg} inset;
      }
    }
  `
  static imgCover = css`
    ${this.square('100%')}
    object-fit: cover;
  `
  static imgContain = css`
    ${this.square('100%')}
    object-fit: contain;
  `
  static cover = css`
    ${this.abs(0, 0)}
    ${this.square('100%')}
    z-index: 50;
  `
  static overlay = css`
    ${this.cover}
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.65);
    transition: ${CssVars.transition};
  `

  static maxRead = css`
    max-width: 54rem;
  `
  static mNotLast = ({margin, dir}) => css`
    ${
      dir === 'right' ? `
        & > :not(:last-child){
          margin-right: ${margin};              
        }
      ` : `
        & > :not(:last-child){
          margin-bottom: ${margin};              
        }
      `
    }
  `
  static scrollbar = ({color, bg, w, rounded = false, allBg = '#F5F5F5'}) => css`
    &::-webkit-scrollbar-track{
      background-color: ${bg};
    }

    &::-webkit-scrollbar{
      width: ${w};
      background-color: ${allBg};
    }

    &::-webkit-scrollbar-thumb{
      background-color: ${color};
      ${rounded ? `border-radius: 10px;` : ``}
    }
  `

  static generateSimpleGradient = ({dir, bg1, bg2}) => `linear-gradient(to ${dir}, ${bg1}, ${bg2})`

  static hoverUnderline = ({h, top, bg, dist, w = '100%', dir = 'right'}) => css`
    background-image: ${this.generateSimpleGradient({dir, bg1: bg, bg2: bg})};
    background-size: 0% ${h};
    background-position: 0 ${top};
    background-repeat: no-repeat;
    transition: all .3s;

    position: relative;
    padding-bottom: ${dist + h};
    margin-bottom: -${dist + h};

    &:hover{
      background-size: ${w} ${h};
    }
  `
}

export default OtherMixins;