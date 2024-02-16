import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HeadingComponent } from "./heading/heading.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    imports: [CommonModule, RouterOutlet, LoginComponent, HeadingComponent]
})

export class AppComponent {
  title = 'facebook';
}
