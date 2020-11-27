import { ActivitiesLists } from './activities-list.model';
import { Subject } from 'rxjs';
import { Activities } from './activities.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  activitiesChanges = new Subject<Activities[]>();
  private activity: Activities[] = [
    new Activities('2000-12-1', 'Office Day One', [new ActivitiesLists('activOne', 3)]),

    new Activities(
      '2020-1-1',
      'Office Day TWo',
      [new ActivitiesLists('activthree', 3),
      new ActivitiesLists('Reading', 6),
      new ActivitiesLists('Writing', 8),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10)]),

    new Activities(
      '2020-1-1',
      'Office Day TWo',
      [new ActivitiesLists('activthree', 3),
      new ActivitiesLists('Reading', 6),
      new ActivitiesLists('Writing', 8),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10)]),

    new Activities(
      '2020-1-1',
      'Office Day TWo',
      [new ActivitiesLists('activthree', 3),
      new ActivitiesLists('Reading', 6),
      new ActivitiesLists('Writing', 8),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10)]),
    new Activities(
      '2020-1-1',
      'Office Day TWo',
      [new ActivitiesLists('activthree', 3),
      new ActivitiesLists('Reading', 6),
      new ActivitiesLists('Writing a report', 8),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10),
      new ActivitiesLists('Presenting', 10)])
  ];

  getAllActivities() {
    return this.activity.slice();
  }

  addActivity(newActivity) {
    this.activity.push(newActivity);
    this.activitiesChanges.next(this.activity);
  }

  deleteActivity(index) {
    this.activity.splice(index, 1);
    this.activitiesChanges.next(this.activity.slice());
  }


  addingBackGroundColor(index) {
    const setOfColors = ['#05a9f4', '#f44336', '#ff9800', '#ffc107', '#00bcd4', '#de6e79', '#87438c', '#e86b2f', '#d19bf3'];
    return setOfColors[index];
  }
  constructor() { }
}
