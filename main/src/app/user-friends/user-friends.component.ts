import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";
import { CookieService } from 'ngx-cookie-service';
import { FacebookService } from '../facebook.service';
import { UserRelation } from '../user-relation';
import { FriendViewComponent } from "../friend-view/friend-view.component";
import { UserRequestsComponent } from "../user-requests/user-requests.component";
import { UserSuggestionsComponent } from "../user-suggestions/user-suggestions.component";
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-user-friends',
    standalone: true,
    templateUrl: './user-friends.component.html',
    styleUrl: './user-friends.component.sass',
    imports: [CommonModule, HeadingComponent, FriendViewComponent, UserRequestsComponent, UserSuggestionsComponent, LoginComponent]
})
export class UserFriendsComponent {
    service : FacebookService = inject(FacebookService)
    cookie : CookieService = inject(CookieService)
    user : string = ''
    friends : string[] = []
    login = true

    constructor(){
        this.user = this.cookie.get('facebook-username')
        if(this.user){
            this.login = false
            this.service.getFriends(this.user).then(l => this.friends = l.map(u => u.username_1 == this.user ? u.username_2 : u.username_1))
        }
    }
}
