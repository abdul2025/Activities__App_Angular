import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDayActivitiesComponent } from './my-day-activities.component';

describe('MyDayActivitiesComponent', () => {
  let component: MyDayActivitiesComponent;
  let fixture: ComponentFixture<MyDayActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDayActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDayActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
