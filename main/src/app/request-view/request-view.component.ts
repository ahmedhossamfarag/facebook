import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookService } from '../facebook.service';
import { UserRelation } from '../user-relation';

@Component({
  selector: 'app-request-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-view.component.html',
  styleUrl: './request-view.component.sass'
})
export class RequestViewComponent implements OnInit {
  service : FacebookService = inject(FacebookService)
  @Input() data! : UserRelation

  friendImage : string = ''
  friendName : string = ''
  friendsNum : number = 0

  visible : boolean = true

  ngOnInit(){
    this.service.getUser(this.data.username_2).then(user => {
      this.friendName = user.name
      this.friendImage = user.profileImage
    })
    
    this.service.getFriends(this.data.username_2).then(l => this.friendsNum = l.length)
  }
  

  accept(){

  }

  reject(){
    this.visible = false
  }
}