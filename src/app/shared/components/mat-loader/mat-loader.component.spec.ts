import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLoaderComponent } from './mat-loader.component';

describe('MatLoaderComponent', () => {
  let component: MatLoaderComponent;
  let fixture: ComponentFixture<MatLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
