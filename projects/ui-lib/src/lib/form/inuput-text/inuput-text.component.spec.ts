/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InuputTextComponent } from './inuput-text.component';

describe('InuputTextComponent', () => {
  let component: InuputTextComponent;
  let fixture: ComponentFixture<InuputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InuputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InuputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
