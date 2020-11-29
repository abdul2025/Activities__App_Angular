import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  constructor() { }

  addingBackGroundColor(index) {
    const setOfColors = ['#05a9f4', '#f44336', '#ff9800', '#ffc107', '#00bcd4', '#de6e79', '#87438c', '#e86b2f', '#d19bf3'];
    return setOfColors[index];
  }
}
