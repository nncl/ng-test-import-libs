import { Component } from '@angular/core';
import { CoreService, Users } from 'customer-libs/dist/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  $users: Observable<Users>;

  title = 'test-lint';

  constructor(private core: CoreService) {
    this.$users = core.get();
  }
}
