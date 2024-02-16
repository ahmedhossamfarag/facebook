import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPublished } from '../user-published';
import { FacebookService } from '../facebook.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-published-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './published-view.component.html',
  styleUrl: './published-view.component.sass'
})
export class PublishedViewComponent implements OnInit {
  service : FacebookService = inject(FacebookService)
  @Input() data! : UserPublished;

  visible : boolean = false

  icon : string = ''
  date? : Date
  content : any[] = []

  ngOnInit(): void {
    this.service.getUser(this.data.username).then( d =>{
      this.icon = d.name
      this.date = new Date(this.data.date)
      this.content = JSON.parse(this.data.content)
      this.visible = true
    }
    )
  }
}
