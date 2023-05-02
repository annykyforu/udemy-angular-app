import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userName: String = '';

  constructor() {}

  ngOnInit(): void {}

  onResetUserName() {
    this.userName = '';
  }
}
