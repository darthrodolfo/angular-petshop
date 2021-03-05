import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.products$ = this.dataService.getProducts();
  }
}
