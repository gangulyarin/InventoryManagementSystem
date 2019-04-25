import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { PurchaseService } from '../service/purchase.service';
import { Purchase } from '../model/purchase.model';
import { Product } from '../model/product.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {

  @ViewChild('createPurchaseForm')
  createPurchaseForm:NgForm;
  purchase:Purchase={
    id: '',
    supplierName: '',
    productId: '',
    numberReceived: 0,
    purchaseDate: ''
  };

  products:Product[];
  constructor(private productSvcs:ProductService, private purchaseSvcs:PurchaseService, private router:Router) {
    this.products = this.productSvcs.getAllProducts();
   }

  ngOnInit() {
  }

  addPurchase(){
    const prod = this.productSvcs.getProductById(this.purchase.productId);
    prod.inventoryReceived+=this.purchase.numberReceived;
    prod.inventoryOnHand+=this.purchase.numberReceived;
    this.productSvcs.editProduct(prod);
    this.purchaseSvcs.addPurchase(this.purchase);
    this.router.navigateByUrl('/purchase');
  }

}
