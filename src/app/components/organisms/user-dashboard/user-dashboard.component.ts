import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {


  showDepositForm: boolean = false;

  clickShowDeposit(){
    this.showDepositForm = true;
  }

  clickHideDeposit(){
    this.showDepositForm = false;
  }
}
