import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.sass'
})
export class ProductViewComponent {

  @Input() data! : Product

}
