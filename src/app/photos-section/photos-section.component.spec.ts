import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSectionComponent } from './photos-section.component';

describe('PhotosSectionComponent', () => {
  let component: PhotosSectionComponent;
  let fixture: ComponentFixture<PhotosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
