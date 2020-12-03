import { Component, OnInit } from '@angular/core';
import { ApiData } from './../shared/apiData.model';
import { ApiService } from './../shared/api.service';
import { ActivitiesService } from './../shared/activities.service';

@Component({
  selector: 'app-view-teaks',
  templateUrl: './view-teaks.component.html',
  styleUrls: ['./view-teaks.component.scss']
})
export class ViewTeaksComponent implements OnInit {
  allActivities: ApiData[];
  isLoading = false;
  allActivitiesLen: number;
  error = null;

  constructor(private actiServ: ActivitiesService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.isLoading = true;
    this.apiService.getAllData().subscribe((data) => {
      console.log(data);
      this.isLoading = false;
      this.allActivitiesLen = data.length;
      this.allActivities = data;
      console.log(this.allActivities);
    }, error => {
      console.log(error.error.error);
      this.error = `${error.error.error} status is  ${error.status}`;
    });
  }
  addingBackGroundColor(index) {
    return this.actiServ.addingBackGroundColor(index);
  }

  deleteCards(id: string) {
    this.apiService.deleteActivityCard(id).subscribe(res => {
      console.log(res);
      this.getActivities();
    });
  }


}
