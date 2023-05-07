import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userName: String = '';
  displayDetails: Boolean = false;
  logButtonClicks: Array<Date> = [];

  constructor() {}

  ngOnInit(): void {}

  onResetUserName() {
    this.userName = '';
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logButtonClicks.push(new Date());
  }
}
