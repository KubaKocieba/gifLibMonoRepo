import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibrarySaveSnackComponent } from './library-save-snack.component';

describe('LibrarySaveSnackComponent', () => {
  let component: LibrarySaveSnackComponent;
  let fixture: ComponentFixture<LibrarySaveSnackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySaveSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySaveSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
