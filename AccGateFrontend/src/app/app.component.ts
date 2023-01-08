import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from './_services/token-storage.service';
import { EventBusService } from './_shared/event-bus.service';
import {Router} from "@angular/router";
import {workingModeConfiguration} from "./app.config";
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  public isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  eventBusSub?: Subscription;
  title?: 'accGate';

  constructor(private tokenStorageService: TokenStorageService,
              private eventBusService: EventBusService,
              private userService: UserService,
              private router: Router) { }

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

    this.eventBusSub = this.eventBusService.on('is2SVRequired', () => {
      this.is2SVRequired();
    });
  }

  ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }

  logout(): void {
    console.log("logging out")
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    this.router.navigate(['/login2']);
  }

  is2SVRequired(): void {
    console.log("is2SVRequired: ")
    this.userService.isTowStepVerRequired().subscribe(
      data => { console.log("data.data: " + data.data);
        console.log("data.message: " + data.message);
        workingModeConfiguration.runMode.TSV = (data.data);
        console.log("workingModeConfiguration.runMode.TSV: " + workingModeConfiguration.runMode.TSV.toString());},
      err => { console.log("Can't detect 2SV operation mode:  "+ err.error); }
    );
  }
}
