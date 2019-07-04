import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.users = this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
