import { ActivitiesLists } from './activities-list.model';

export class Activities {
  public date: string;
  public dayName: string;
  public activities: ActivitiesLists[];

  constructor(date: string, dayName: string, activities: ActivitiesLists[]) {
    this.date = date,
      this.dayName = dayName;
    this.activities = activities;
  }
}
