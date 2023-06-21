import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxJSComponent } from './learn-rx-js.component';

describe('LearnRxJSComponent', () => {
  let component: LearnRxJSComponent;
  let fixture: ComponentFixture<LearnRxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnRxJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
