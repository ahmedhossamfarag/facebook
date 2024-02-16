import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookService } from '../facebook.service';
import { UserRelation } from '../user-relation';

@Component({
  selector: 'app-suggestion-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestion-view.component.html',
  styleUrl: './suggestion-view.component.sass'
})
export class SuggestionViewComponent implements OnInit {
  service : FacebookService = inject(FacebookService)
  @Input() data! : UserRelation

  friendImage : string = ''
  friendName : string = ''
  friendsNum : number = 0

  visible : boolean = true

  ngOnInit(){
    this.service.getUser(this.data.username_1).then(user => {
      this.friendName = user.name
      this.friendImage = user.profileImage
    })
    
    this.service.getFriends(this.data.username_1).then(l => this.friendsNum = l.length)
  }
  

  addFriend(){

  }

  remove(){
    this.visible = false
  }

}
