import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { KeyboardNavigableDirective } from './keyboard-navigable.directive';

describe('KeyboardNavigableDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('input'));
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useValue: el }],
    });
    const directive = TestBed.runInInjectionContext(() => new KeyboardNavigableDirective());
    expect(directive).toBeTruthy();
  });
});
