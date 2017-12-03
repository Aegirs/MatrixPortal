/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromotingComponent } from './promoting.component';

describe('PromotingComponent', () => {
  let component: PromotingComponent;
  let fixture: ComponentFixture<PromotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
