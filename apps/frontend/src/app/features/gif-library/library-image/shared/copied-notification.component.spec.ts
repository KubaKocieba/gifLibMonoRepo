import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CopiedNotificationComponent } from './copied-notification.component';

describe('CopiedNotificationComponent', () => {
  let component: CopiedNotificationComponent;
  let fixture: ComponentFixture<CopiedNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiedNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
