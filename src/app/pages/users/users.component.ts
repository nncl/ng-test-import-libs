import { Component } from '@angular/core';

import { CoreService } from 'customer-libs/dist/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  $users;

  constructor(private core: CoreService) {
    this.$users = core.get();
  }
}
