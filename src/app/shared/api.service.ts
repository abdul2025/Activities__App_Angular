import { ActivitiesLists } from './activities-list.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiData } from './apiData.model';



@Injectable({
  providedIn: 'root'
})



export class ApiService {
  url = 'https://abgular-activity-data.firebaseio.com/posts.json';

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<{ [key: string]: ApiData }>(this.url)
      .pipe(map(responseData => {
        const dataRes: ApiData[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataRes.push({ ...responseData[key], id: key });
          }
        }
        return dataRes;
      }));
  }


  addActivities(newActivity) {
    return this.http.post<{ totalHours: number, date: string, dayName: string, activities: ActivitiesLists[] }>
      (this.url, newActivity);
  } ß

  deleteActivityCard(id: string) {
    return this.http.delete(`https://abgular-activity-data.firebaseio.com/posts/${id}.json`);
  }


}


