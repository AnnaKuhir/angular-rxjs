import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionInfoItemComponent } from './addition-info-item.component';

describe('AdditionInfoItemComponent', () => {
  let component: AdditionInfoItemComponent;
  let fixture: ComponentFixture<AdditionInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionInfoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
