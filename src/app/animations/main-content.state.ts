import { trigger, state, animate, transition, style } from '@angular/animations';

const variables = require('../../styles.styl');

export const mainContentState =
  trigger('mainContentState', [
    state('visible', style ({
      height: 'auto',
      bottom: variables.footerHeight,
      top: variables.menuHeight
    })),
    transition ('invisible <=> visible', animate('300ms ease-in')),
  ]);
