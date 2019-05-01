import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';

@Injectable()
export class OrderService{
    orders:Order[] = [
        {
            id:'02458',
            orderNumber:'4578',
            productId:'00014',
            numberShipped:41,
            orderDate:new Date('01-02-2015')
        },
        {
            id:'01478',
            orderNumber:'4684',
            productId:'00002',
            numberShipped:75,
            orderDate:new Date('01-05-2016')
        },
        {
            id:'48546',
            orderNumber:'7897',
            productId:'00014',
            numberShipped:54,
            orderDate:new Date('02-07-2016')
        },
        {
            id:'4543', 
            orderNumber:'5735',
            productId:'00001',
            numberShipped:41,
            orderDate:new Date('01-01-2017')
        },
        {
            id:'6546',
            orderNumber:'4524',
            productId:'00002',
            numberShipped:12,
            orderDate:new Date('01-02-2016')
        }
    ];

    getAllOrders():Order[]{
        return this.orders;
    }

    addOrder(order:Order){
        this.orders.push(order);
    }
}