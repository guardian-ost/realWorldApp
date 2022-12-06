import { ElementRef } from '@angular/core';
import { HighLightDirective } from './high-light.directive';

describe('HighLightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighLightDirective(new ElementRef('testValue'));
    expect(directive).toBeTruthy();
  });
});
