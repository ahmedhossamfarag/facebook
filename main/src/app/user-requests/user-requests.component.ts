import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookService } from '../facebook.service';
import { UserRelation } from '../user-relation';
import { RequestViewComponent } from "../request-view/request-view.component";

@Component({
    selector: 'app-user-requests',
    standalone: true,
    templateUrl: './user-requests.component.html',
    styleUrl: './user-requests.component.sass',
    imports: [CommonModule, RequestViewComponent]
})
export class UserRequestsComponent implements OnInit {
  service : FacebookService = inject(FacebookService)
  @Input() user! : string
  requests : UserRelation[] = []

  visible : boolean = true

  ngOnInit(){
    this.service.getRequests(this.user).then(l => this.requests = l)
  }
}
