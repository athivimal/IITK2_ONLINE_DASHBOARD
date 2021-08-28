import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmmeterComponent } from './ammeter.component';

describe('AmmeterComponent', () => {
  let component: AmmeterComponent;
  let fixture: ComponentFixture<AmmeterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
