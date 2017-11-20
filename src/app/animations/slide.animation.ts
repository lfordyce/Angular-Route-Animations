import { trigger, state, animate, transition, style} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  state('*', style({ position: 'fixed', top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  })),

  // route 'enter' transition
  transition(':enter', [
    // styles at start of transition
    style({
      // start with the content positioned off the right of the screen,
      // -400% is required instead of -100% because the negative position adds to the width of the element
      right: '-400%',
      // start with background opacity set to 0 (invisible)
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }),
    animate('.5s ease-in-out', style({
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }))
  ]),
  // route 'leave' transition
  transition(':leave', [
    // animation and styles at end of transition
    animate('.5s ease-in-out', style({
        // transition the right position to -400% which slides the content out of view
        right: '-400%',
        // transition the background opacity to 0 to fade it out
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }))
  ])
]);
