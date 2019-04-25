import { Component, OnInit } from '@angular/core';
import { Purchase } from '../model/purchase.model';
import { PurchaseService } from '../service/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchases:Purchase[];
  constructor(private purchaseSvcs:PurchaseService) {
    this.purchases = this.purchaseSvcs.getAllPurchases();
   }

  ngOnInit() {
  }

}
