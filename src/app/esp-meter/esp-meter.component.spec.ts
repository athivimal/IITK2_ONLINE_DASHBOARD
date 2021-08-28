import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { EspMeterComponent } from "./esp-meter.component";

describe("EspMeterComponent", () => {
  let component: EspMeterComponent;
  let fixture: ComponentFixture<EspMeterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EspMeterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
