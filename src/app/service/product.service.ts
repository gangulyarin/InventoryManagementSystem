import { Injectable } from "@angular/core";
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    products:Product[] = [
        {
            id: '00001',
    productNumber: '00111',
    productLabel: 'Mouse',
    startingInventory: 0,
    inventoryReceived: 45,
    inventoryShipped: 40,
    inventoryOnHand: 5,
    minimumRequired: 5
        },
        {
            id: '00002',
    productNumber: '00211',
    productLabel: 'Printer',
    startingInventory: 10,
    inventoryReceived: 450,
    inventoryShipped: 4,
    inventoryOnHand: 100,
    minimumRequired: 10
        },
        {
            id: '00014',
    productNumber: '01525',
    productLabel: 'Monitor',
    startingInventory: 45,
    inventoryReceived: 654,
    inventoryShipped: 89,
    inventoryOnHand: 123,
    minimumRequired: 4
        }
    ];

    constructor(private http:HttpClient){}

    getAllProducts(){
        /*this.http.get<Product[]>('https://us-central1-inventory-server-e2ae2.cloudfunctions.net/widgets/api/inventory/getProducts').subscribe((res)=>{
            this.products = res;
        })*/
        return this.products;
    }

    getProductById(id:string):Product{
        this.products = this.getAllProducts();
        const foundIndex = this.products.findIndex(p => p.id === id);
        return this.products[foundIndex];
    }

    editProduct(product:Product){
        const foundIndex = this.products.findIndex(p => p.id === product.id);
        this.products[foundIndex] = product;
        /*this.http.post('https://us-central1-inventory-server-e2ae2.cloudfunctions.net/widgets/api/inventory/editProduct',product).subscribe(res=>{
            this.products = this.getAllProducts();
        })*/
    }

    addProduct(product:Product){
        this.products.push(product);
        /*this.http.post('https://us-central1-inventory-server-e2ae2.cloudfunctions.net/widgets/api/inventory/addProduct',product).subscribe(res=>{
            this.products = this.getAllProducts();
        });*/
    }

    getAllProductTypes():String[]{
        this.products = this.getAllProducts();
        const productTypes: String[] = this.products.map(p=>{
            return p.productLabel;
        });
        return productTypes;
    }
}