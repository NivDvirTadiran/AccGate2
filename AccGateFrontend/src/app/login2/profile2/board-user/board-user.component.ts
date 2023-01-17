import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';
import { EventData } from 'src/app/_shared/event.class';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = err.error.message || err.error || err.message;
        if (err.status === 403)
          this.eventBusService.emit(new EventData('logout', null));
      }
    );
  }
}
