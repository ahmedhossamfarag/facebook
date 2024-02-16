import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";
import { FacebookService } from '../facebook.service';
import { Product } from '../product';
import { ProductViewComponent } from "../product-view/product-view.component";

@Component({
    selector: 'app-user-marketplace',
    standalone: true,
    templateUrl: './user-marketplace.component.html',
    styleUrl: './user-marketplace.component.sass',
    imports: [CommonModule, HeadingComponent, ProductViewComponent]
})
export class UserMarketplaceComponent {
    service : FacebookService = inject(FacebookService)
    products : Product[] = []

    constructor(){
        this.service.getProducts().then(l => this.products = l)
    }
}
