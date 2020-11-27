import { Activities } from './../shared/activities.model';
import { ActivitiesService } from './../shared/activities.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-teaks',
  templateUrl: './view-teaks.component.html',
  styleUrls: ['./view-teaks.component.scss']
})
export class ViewTeaksComponent implements OnInit, OnDestroy {
  allActivities: Activities[];
  private isChangeSub: Subscription;

  constructor(private actiServ: ActivitiesService) { }

  ngOnInit(): void {
    this.allActivities = this.actiServ.getAllActivities();
    this.isChangeSub = this.actiServ.activitiesChanges.subscribe((activities: Activities[]) => {
      this.allActivities = activities;
    });
  }

  addingBackGroundColor(index) {
    return this.actiServ.addingBackGroundColor(index);
  }


  deleteCards(index: number) {
    this.actiServ.deleteActivity(index);
  }


  ngOnDestroy() {
    this.isChangeSub.unsubscribe();
  }
}
