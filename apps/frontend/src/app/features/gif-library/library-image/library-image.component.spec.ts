import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryImageComponent } from './library-image.component';

describe('LibraryImageComponent', () => {
  let component: LibraryImageComponent;
  let fixture: ComponentFixture<LibraryImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
