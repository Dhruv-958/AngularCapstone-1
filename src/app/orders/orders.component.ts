import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders : any[] = [
    { orderid : 2001, productName : "iphone 11 pro", quantity : 1, billAmount : '1850', transaction : 'Completed'},
    { orderid : 2002, productName : "iphone 10", quantity : 1, billAmount : '3572', transaction : 'Pending'},
    { orderid : 2003, productName : "Samsung Galaxy S10", quantity : 2, billAmount : '2342', transaction : 'Completed'},
    { orderid : 2004, productName : "Motorolla Edge+", quantity : 1, billAmount : '9099', transaction : 'Pending'},
  ]
}
