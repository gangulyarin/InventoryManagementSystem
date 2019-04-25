import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @ViewChild('editProductForm')
  public editProductForm:NgForm;
  product:Product;
  constructor(private route:ActivatedRoute, private productSvcs:ProductService, private router:Router) { }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('id');
    this.product = this.productSvcs.getProductById(index);
  }

  editProduct(){
    this.productSvcs.editProduct(this.product);
    this.router.navigateByUrl('/product');
  }

}
