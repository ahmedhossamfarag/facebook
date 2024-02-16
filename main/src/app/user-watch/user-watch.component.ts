import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";
import { PublishedViewComponent } from "../published-view/published-view.component";
import { CookieService } from 'ngx-cookie-service';
import { FacebookService } from '../facebook.service';
import { UserPublished } from '../user-published';

@Component({
    selector: 'app-user-watch',
    standalone: true,
    templateUrl: './user-watch.component.html',
    styleUrl: './user-watch.component.sass',
    imports: [CommonModule, HeadingComponent, PublishedViewComponent]
})
export class UserWatchComponent {
    service : FacebookService = inject(FacebookService)
    cookie : CookieService = inject(CookieService)
    published : UserPublished[] = []
    login = true

    constructor(){
        var user = this.cookie.get('facebook-username')
        if(user){
            this.service.getVideos(user).then(l => this.published = l)
            this.login = false
        }
    }
}
