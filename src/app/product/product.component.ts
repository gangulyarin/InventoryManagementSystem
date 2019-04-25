import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsToDisplay:Product[];
  constructor(productService: ProductService) {
    this.productsToDisplay = productService.getAllProducts();
   }

  ngOnInit() {
  }

}
