import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-my-day-activities',
  templateUrl: './edit-my-day-activities.component.html',
  styleUrls: ['./edit-my-day-activities.component.scss']
})
export class EditMyDayActivitiesComponent implements OnInit {


  id: number;
  editMode = false;
  index: number;
  activitiesFrom: FormGroup;
  totalHours: number;
  hoursSatus = false;



  constructor(private fb: FormBuilder, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initForm();
  }


  private initForm() {
    const activitiesArr = new FormArray([]);
    this.activitiesFrom = this.fb.group({
      'activities': activitiesArr,
    });
  }


  /// New Concepts
  get controls() { // a getter!
    return (this.activitiesFrom.get('activities') as FormArray).controls;
  }

  onAddActivities() {
    if (((this.activitiesFrom.get('activities') as FormArray).value).length >= 5) {
      console.log('can not add more then 5 activity for a day');
      return;
    }
    (this.activitiesFrom.get('activities') as FormArray).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'hours': new FormControl(null, [Validators.required, Validators.pattern(/^(2[0-4]|1[0-9]|[1-9])$/)])
      }));
  }


  addingBackGroundColor(index) {
    this.index = index;
    const setOfColors = ['#05a9f4', '#f44336', '#ff9800', '#ffc107', '#00bcd4'];
    return setOfColors[index];
  }

  resetForm() {
    this.activitiesFrom.reset();
  }

  onSubmit() {
    let totalHours = 0;
    (this.activitiesFrom.get('activities').value).forEach((el) => {
      totalHours += Number(el.hours);
    })
    this.totalHours = totalHours;
    if (totalHours > 24) {
      this.hoursSatus = true;
      console.log('invalid hours');
    } else {
      this.hoursSatus = false;
      this.resetForm();
    }
  }


  cancel() {
    this.hoursSatus = false;
    this.initForm();
    this.resetForm();
  }
}
