import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimatedGaugeComponent } from './animated-gauge.component';

describe('AnimatedGaugeComponent', () => {
  let component: AnimatedGaugeComponent;
  let fixture: ComponentFixture<AnimatedGaugeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
