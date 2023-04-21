// reminder.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {

  med_name: string = '';
  med_time: string = '';
  bef_aft: string = '';
  meal: string = '';  
  am: boolean = false;
  pm: boolean = false;
  time: string = '';

  constructor() { } 

  submitForm() {
    if(this.am) {
      this.time = "AM";
    }else{
      this.time = "PM";
    }
    var m = "Medicine Name: " + this.med_name + "\nTime: " + this.med_time+ this.time +"\nBefore/After: " + this.bef_aft + "\nMeal: " + this.meal;
        alert("Reminder has been set for \n" + m + "");
  }
}
