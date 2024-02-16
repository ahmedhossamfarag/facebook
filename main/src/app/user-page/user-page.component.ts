import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";
import { FacebookService } from '../facebook.service';
import { UserPublished } from '../user-published';
import { PublishedViewComponent } from "../published-view/published-view.component";
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-user-page',
    standalone: true,
    templateUrl: './user-page.component.html',
    styleUrl: './user-page.component.sass',
    imports: [CommonModule, HeadingComponent, PublishedViewComponent, LoginComponent]
})
export class UserPageComponent {
    service : FacebookService = inject(FacebookService)
    cookie : CookieService = inject(CookieService)
    published : UserPublished[] = []
    login = true

    constructor(){
        var user = this.cookie.get('facebook-username')
        if(user){
            this.service.getPublished(user).then(l => this.published = l)
            this.login = false
        }
    }

}
