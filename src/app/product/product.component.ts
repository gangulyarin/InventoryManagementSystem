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
  constructor(private productService: ProductService) {
    
    //console.log(this.productsToDisplay.length);
  }

  ngOnInit() {
    this.productsToDisplay = this.productService.getAllProducts();
  }

}
