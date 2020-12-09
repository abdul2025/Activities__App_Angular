import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from './../../shared/activities.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-my-day-activities',
  templateUrl: './edit-my-day-activities.component.html',
  styleUrls: ['./edit-my-day-activities.component.scss']
})
export class EditMyDayActivitiesComponent implements OnInit, OnDestroy {
  activitiesFrom: FormGroup;
  totalHours: number;
  hoursSatus = false;
  activitiesArray = new FormArray([]);
  curDate: string;
  isLoading = false;
  error = null;
  private userSub: Subscription;
  isAuthenticated = false;
  userId: string;

  constructor(
    private fb: FormBuilder, private activServ: ActivitiesService,
    private router: Router, private route: ActivatedRoute,
    private apiService: ApiService, private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.curDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.userSub = this.authService.user.subscribe(user => {

      if (!user) {
        return;
      }
      this.userId = user.id;
      this.isAuthenticated = !!user;
    });
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
    const getTotalHours = () => {
      this.totalHours = 0;
      this.activitiesArray.value.forEach((el) => {
        this.totalHours += Number(el.hours);
      });
      return this.totalHours;
    };
    if (this.isAuthenticated) {
      this.isLoading = true;
      if (getTotalHours() > 24) {
        this.hoursSatus = true;
        this.isLoading = false;
      } else {
        this.hoursSatus = false;
        // adding a curDate to the form values...
        const obj = { date: this.curDate, totalHours: this.totalHours };
        const formValue = { ...this.activitiesFrom.value, ...obj };
        this.apiService.addActivities(formValue, this.userId).subscribe(res => {
          this.isLoading = false;
          this.router.navigate(['../view'], { relativeTo: this.route });
        }, error => {
          this.error = `${error.error.error} status is  ${error.status}`;
        });
      }
    } else {
      this.error = 'Please Login or Register if not to add you Activities';
    }
  }

  cancel() {
    this.hoursSatus = false;
    this.activitiesFrom.reset();
    (this.activitiesFrom.get('activities') as FormArray).clear();
  }


  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
