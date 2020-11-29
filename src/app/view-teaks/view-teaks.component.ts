import { ApiData } from './../shared/apiData.model';
import { ApiService } from './../shared/api.service';
import { ActivitiesService } from './../shared/activities.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-teaks',
  templateUrl: './view-teaks.component.html',
  styleUrls: ['./view-teaks.component.scss']
})
export class ViewTeaksComponent implements OnInit, AfterViewInit {
  allActivities: ApiData[];
  isLoading = false;
  allActivitiesLen: number;

  constructor(private actiServ: ActivitiesService, private apiService: ApiService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.getActivities();
  }


  getActivities() {
    this.isLoading = true;
    this.apiService.getAllData().subscribe((data) => {
      this.isLoading = false;
      this.allActivitiesLen = data.length;
      this.allActivities = data;
      console.log(this.allActivities);
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
