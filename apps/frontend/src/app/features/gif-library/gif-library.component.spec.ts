import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GifLibraryComponent } from './gif-library.component';

describe('GifLibraryComponent', () => {
  let component: GifLibraryComponent;
  let fixture: ComponentFixture<GifLibraryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GifLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
