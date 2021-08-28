import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MqttDashComponent } from './mqtt-dash.component';

describe('MqttDashComponent', () => {
  let component: MqttDashComponent;
  let fixture: ComponentFixture<MqttDashComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MqttDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqttDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
