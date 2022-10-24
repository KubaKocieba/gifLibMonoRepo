import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditGifComponent } from './edit-gif.component';

describe('EditGifComponent', () => {
  let component: EditGifComponent;
  let fixture: ComponentFixture<EditGifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
