import { trigger, animate, style, group, query, transition } from '@angular/animations';

export function routerTransition() {
  // return slideToLeft();
  // return slideToRight();
  // return slideToTop();
  // return slideToBottom();
  return slideVariation();
}

function slideToLeft() {
  return trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ])
  ]);
}

function slideToRight() {
  return trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
      ])
    ])
  ]);
}

function slideVariation() {
  return trigger('routerTransition', [
    transition('* => home', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('* => ship', [
      group([
        query(':enter, :leave', style({ position: 'fixed', width:'100%' }),
          { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' } ))
        ], { optional: true }),
      ])
    ])
  ]);
}

