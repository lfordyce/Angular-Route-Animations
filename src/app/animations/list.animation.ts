import { trigger, state, animate, transition, style, query, stagger, keyframes } from '@angular/animations';

export const listAnimation = trigger('listAnimation', [

  transition('* => *', [

    query(':enter', style({ opacity: 0}), { optional: true }),

    // ENTER
    query(':enter', stagger('300ms', [
      animate('0.5s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75px)', offset: 0}),
        style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
        style({ opacity: 1, transform: 'translateY(0px)', offset: 1}),
      ]))
    ]), { optional: true }),


    // LEAVE
    query(':leave', stagger('300ms', [
      animate('0.3s ease-in', keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', offset: 0}),
        style({ opacity: 0.3, transform: 'translateY(35px)', offset: 0.3}),
        style({ opacity: 0, transform: 'translateY(-75px)', offset: 1}),
      ]))
    ]), { optional: true })

  ])

]);
