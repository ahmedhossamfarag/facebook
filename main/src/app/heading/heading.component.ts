import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.sass'
})
export class HeadingComponent {

  @Input() currentIndex! : number;

}
