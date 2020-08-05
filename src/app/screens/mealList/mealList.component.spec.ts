import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListComponent } from './mealList.component';

describe('MealListComponent', () => {
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
