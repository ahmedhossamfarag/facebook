import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookService } from '../facebook.service';

@Component({
  selector: 'app-friend-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friend-view.component.html',
  styleUrl: './friend-view.component.sass'
})
export class FriendViewComponent implements OnInit {
  service : FacebookService = inject(FacebookService)
  @Input() data! : string

  friendImage : string = ''
  friendName : string = ''
  friendsNum : number = 0

  ngOnInit(){
    this.service.getUser(this.data).then(
      user => {
        this.friendName = user.name
        this.friendImage = user.profileImage
      }
    )
    
    this.service.getFriends(this.data).then(l => this.friendsNum = l.length)
  }
  
}
