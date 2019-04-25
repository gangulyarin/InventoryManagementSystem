import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  @ViewChild('createProductForm')
  createProductForm:NgForm;

  product:Product={
    id: '',
    productNumber: '',
    productLabel: '',
    startingInventory: 0,
    inventoryReceived: 0,
    inventoryShipped: 0,
    inventoryOnHand: 0,
    minimumRequired: 0
  };
  constructor(private productSvcs:ProductService, private router:Router) {  }

  ngOnInit() {
  }

  addProduct(){
    this.product.id = this.productSvcs.getAllProducts().length.toString();
    this.productSvcs.addProduct(this.product);
    this.router.navigateByUrl('/product')
  }
}
