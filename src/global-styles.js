import { injectGlobal } from 'styled-components';
import ApercuRegular from './assets/fonts/apercu/apercu-regular.otf';
import ApercuLight from './assets/fonts/apercu/apercu-light.otf';
import GTAmericanExpandedBold from './assets/fonts/gt-american-expanded-bold/gt-america-expanded-bold.otf';

injectGlobal`
  @font-face {
    font-family: ApercuRegular;
    src: url('${ApercuRegular}') format('opentype');
  }

  @font-face {
    font-family: ApercuLight;
    src: url('${ApercuLight}') format('opentype');
  }

  @font-face {
    font-family: GTAmericanExpandedBold;
    src: url('${GTAmericanExpandedBold}') format('opentype');
  }
`