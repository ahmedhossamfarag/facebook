import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookService } from '../facebook.service';
import { UserRelation } from '../user-relation';
import { SuggestionViewComponent } from "../suggestion-view/suggestion-view.component";

@Component({
    selector: 'app-user-suggestions',
    standalone: true,
    templateUrl: './user-suggestions.component.html',
    styleUrl: './user-suggestions.component.sass',
    imports: [CommonModule, SuggestionViewComponent]
})
export class UserSuggestionsComponent implements OnInit {
  service : FacebookService = inject(FacebookService)
  @Input() user! : string
  suggestions : UserRelation[] = []

  visible : boolean = true

  ngOnInit(){
    this.service.getSuggestions(this.user).then(l => this.suggestions = l)
  }
}
