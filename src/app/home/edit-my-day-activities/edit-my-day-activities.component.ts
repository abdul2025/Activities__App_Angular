import { ApiService } from './../../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  activitiesFrom: FormGroup;
  totalHours: number;
  hoursSatus = false;
  activitiesArray = new FormArray([]);
  curDate: string;
  isLoading = false;

  constructor(private fb: FormBuilder, private activServ: ActivitiesService,
    private router: Router, private route: ActivatedRoute,
    private apiService: ApiService) {

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
    this.isLoading = true;
    this.totalHours = 0;
    this.activitiesArray.value.forEach((el) => {
      this.totalHours += Number(el.hours);
    });
    if (this.totalHours > 24) {
      this.hoursSatus = true;
      this.isLoading = false;
      console.log('invalid hours');
    } else {
      this.hoursSatus = false;
      // adding a curDate to the form values...
      const obj = { date: this.curDate, totalHours: this.totalHours };
      const formValue = { ...this.activitiesFrom.value, ...obj };
      this.apiService.addActivities(formValue).subscribe(res => {
        this.isLoading = false;
        this.router.navigate(['../view'], { relativeTo: this.route });
      });
    }
  }

  cancel() {
    this.hoursSatus = false;
    this.activitiesFrom.reset();
    (this.activitiesFrom.get('activities') as FormArray).clear();
  }
}
