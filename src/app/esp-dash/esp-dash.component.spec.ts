import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EspDashComponent } from './esp-dash.component';

describe('EspDashComponent', () => {
  let component: EspDashComponent;
  let fixture: ComponentFixture<EspDashComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EspDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
