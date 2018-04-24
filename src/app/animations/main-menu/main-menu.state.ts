import { trigger, state, animate, transition, style, query, group, stagger } from '@angular/animations';

const variables = require('../../../styles.styl');

console.log(variables);

export const mainMenuState =
  trigger('mainMenuState', [
    state('active', style({
      height: variables.menuHeight,
      top: 0
    })),
    state('inactive', style({
      height: '200px'
    })),
    state('void', style({
      height: '1px',
      top: '50%'
    })),
    transition('inactive <=> active', [
      animate('3000ms ease-in')
    ]),
    transition (':enter', [
      animate('3000ms 3000ms ease-in-out',
        style({
          height: '*',
          top: '*'
      })),
      // query('.menu-bottom-border ', [
      //   style({
      //     transform: 'translateX(-100%)'
      //   }),
      //   animate('300ms ease-in-out',
      //     style({
      //       transform: '*'
      //   }))
      // ]),
      query('.menu-items-wrapper', [
        animate('3000ms ease-in-out',
          style({
            // height: '200px',
            // background: 'red'
          })
        )
      ]),
      group([
        // style({
        //   // height: '0',
        //   // top: '50%'
        // }),
        // animate('300ms ease-in-out',
        //   style({
        //     height: '*',
        //     top: '*'
        // })),
        // query('.menu-item', [
        //   style({
        //     opacity: 0,
        //     height: 0,
        //   }),
        //   stagger(100, [
        //     animate('300ms ease-in-out',
        //       style({
        //         height: '*',
        //         opacity: 1
        //       })
        //     )
        //   ])
        // ])
      ])
    ])
  ]);
