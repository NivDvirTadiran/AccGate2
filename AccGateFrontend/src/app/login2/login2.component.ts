import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';

@Component({
  selector: 'login2',
  templateUrl: './login2.component.html',
  //styleUrls: ['./app.component.css']
})
export class Login2Component {
  private roles: string[] = [];
  public isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  eventBusSub?: Subscription;
  title?: 'accGate';

  constructor(private tokenStorageService: TokenStorageService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = (this.roles.includes('Admin') || this.roles.includes('SupervisorAdmin'));
      this.showModeratorBoard = this.roles.includes('SupervisorMonitor');

      this.username = user.username;
    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    //window.location.reload();
  }

}
