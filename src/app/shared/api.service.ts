import { AuthService } from './../auth/auth.service';
import { ActivitiesLists } from './activities-list.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs/operators';
import { ApiData } from './apiData.model';



@Injectable({
  providedIn: 'root'
})



export class ApiService {
  url = 'https://abgular-activity-data.firebaseio.com/activities.json';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllData(userId) {
    return this.http.get<{ [key: string]: ApiData }>
      (`https://abgular-activity-data.firebaseio.com/${userId}.json`)
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


  addActivities(newActivity, userId) {
    return this.http.post<{ totalHours: number, date: string, dayName: string, activities: ActivitiesLists[] }>
      (`https://abgular-activity-data.firebaseio.com/${userId}.json`, newActivity);
  }

  deleteActivityCard(cardId: string, userId) {
    return this.http.delete(`https://abgular-activity-data.firebaseio.com/${userId}/${cardId}.json`);
  }


}


