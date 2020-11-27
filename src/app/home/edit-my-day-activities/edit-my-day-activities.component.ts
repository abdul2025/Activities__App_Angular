import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { Activities } from './../../shared/activities.model';
import { ActivitiesService } from './../../shared/activities.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-my-day-activities',
  templateUrl: './edit-my-day-activities.component.html',
  styleUrls: ['./edit-my-day-activities.component.scss']
})
export class EditMyDayActivitiesComponent implements OnInit {
  index: number;
  activitiesFrom: FormGroup;
  totalHours: number;
  hoursSatus = false;
  activitiesArray = new FormArray([]);
  curDate: string;

  constructor(private fb: FormBuilder, private activServ: ActivitiesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.initForm();
    this.curDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }


  private initForm() {
    this.activitiesFrom = this.fb.group({
      'dayName': [null, Validators.required],
      'activities': this.activitiesArray,
    });

    console.log(this.activServ.getAllActivities());

  }

  /// New Concepts
  get controls() { // a getter!
    return this.activitiesArray.controls;
  }

  addNewActivitiesList() {
    if (this.activitiesArray.value.length >= 9) {
      console.log('can not add more then 5 activity for a day');
      return;
    }
    (this.activitiesArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        hours: new FormControl(null, [Validators.required, Validators.pattern(/^(2[0-4]|1[0-9]|[1-9])$/)])
      }));
  }


  addingBackGroundColor(index) {
    return this.activServ.addingBackGroundColor(index);
  }

  onSubmit() {
    let totalHours = 0;
    this.activitiesArray.value.forEach((el) => {
      totalHours += Number(el.hours);
    });
    if (totalHours > 24) {
      this.hoursSatus = true;
      console.log('invalid hours');
    } else {
      this.totalHours = totalHours;
      this.hoursSatus = false;
      // console.log(this.activitiesFrom.value);
      // adding a curDate to the form values...
      const obj = { date: this.curDate };
      const formValue = { ...this.activitiesFrom.value, ...obj };
      this.activServ.addActivity(formValue);
      this.router.navigate(['../view'], { relativeTo: this.route });

    }
  }





  cancel() {
    this.hoursSatus = false;
    this.activitiesFrom.reset();
    (this.activitiesFrom.get('activities') as FormArray).clear();
  }
}
