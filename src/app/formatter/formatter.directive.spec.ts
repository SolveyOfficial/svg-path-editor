import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormatterDirective } from './formatter.directive';

describe('FormatterDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('input'));
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useValue: el }],
    });
    const directive = TestBed.runInInjectionContext(() => new FormatterDirective());
    expect(directive).toBeTruthy();
  });
});
