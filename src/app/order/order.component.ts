import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:Order[];
  constructor(private orderSvcs:OrderService) { 
    this.orders = this.orderSvcs.getAllOrders();
  }

  ngOnInit() {
  }

}
