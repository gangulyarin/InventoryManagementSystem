import { Injectable } from "@angular/core";
import { Product } from '../model/product.model';

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

    getAllProducts():Product[]{
        return this.products;
    }

    getProductById(id:string):Product{
        const foundIndex = this.products.findIndex(p => p.id === id);
        return this.products[foundIndex];
    }

    editProduct(product:Product){
        const foundIndex = this.products.findIndex(p => p.id === product.id);
        this.products[foundIndex] = product;
    }

    addProduct(product:Product){
        this.products.push(product);
    }

    getAllProductTypes():String[]{
        const productTypes: String[] = this.products.map(p=>{
            return p.productLabel;
        });
        return productTypes;
    }
}