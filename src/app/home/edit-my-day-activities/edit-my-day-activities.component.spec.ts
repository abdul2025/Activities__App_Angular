import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyDayActivitiesComponent } from './edit-my-day-activities.component';

describe('EditMyDayActivitiesComponent', () => {
  let component: EditMyDayActivitiesComponent;
  let fixture: ComponentFixture<EditMyDayActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMyDayActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyDayActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
