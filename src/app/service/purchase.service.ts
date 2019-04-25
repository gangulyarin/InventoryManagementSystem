import { Injectable } from '@angular/core';
import { Purchase } from '../model/purchase.model';

@Injectable()
export class PurchaseService{
    purchases:Purchase[]=[
        {
            id: '0012',
            supplierName: '2011',
            productId: '0011',
            numberReceived: 47,
            purchaseDate: '10-09-2015'
        },
        {
            id: '0005',
            supplierName: '8071',
            productId: '0012',
            numberReceived: 3,
            purchaseDate: '01-02-2016'
        }
    ];

    getAllPurchases():Purchase[]{
        return this.purchases;
    }

    getPurchaseById(id):Purchase{
        const index = this.purchases.findIndex(p=>p.id===id);
        return this.purchases[index];
    }

    editPurchase(purchase:Purchase){
        const index = this.purchases.findIndex(p=>p.id===purchase.id); 
        this.purchases[index] = purchase;
    }

    addPurchase(purchase:Purchase){
        const id = this.purchases.length.toString();
        purchase.id = id;
        this.purchases.push(purchase);
    }
}