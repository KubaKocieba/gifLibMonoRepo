import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { MobileNaviHeaderComponent } from "./mobile-navi-header.component";

describe("MobileNaviComponent", () => {
  let component: MobileNaviHeaderComponent;
  let fixture: ComponentFixture<MobileNaviHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNaviHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNaviHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
