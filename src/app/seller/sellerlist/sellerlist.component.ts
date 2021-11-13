import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellerlist',
  templateUrl: './sellerlist.component.html',
  styleUrls: ['./sellerlist.component.css'],
})
export class SellerlistComponent implements OnInit {
  books: any = [
    { name: 'Saloni', Tquantity: '32', Squantity: '25', unSold: '7', priceSet: '299', profit: '28.36%'},
    { name: 'Saloni', Tquantity: '32', Squantity: '25', unSold: '7', priceSet: '299', profit: '28.36%'},
    { name: 'Saloni', Tquantity: '32', Squantity: '25', unSold: '7', priceSet: '299', profit: '28.36%'},

    { name: 'Saloni', Tquantity: '32', Squantity: '25', unSold: '7', priceSet: '299', profit: '28.36%'},
    { name: 'Saloni', Tquantity: '32', Squantity: '25', unSold: '7', priceSet: '299', profit: '28.36%'},
  ];

  constructor() {}

  ngOnInit(): void {}

  confirm() {
    window.confirm('hello..?');
  }
}
