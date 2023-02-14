import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  @Input() currentUser?: UserModel;
  showDepositForm: boolean = false;

  clickShowDeposit(){
    this.showDepositForm = true;
  }

  clickHideDeposit(){
    this.showDepositForm = false;
  }
}
