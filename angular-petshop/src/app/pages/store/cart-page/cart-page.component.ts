import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/card.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public total() {
    let total = 0;
    this.cart.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  public remote(item: any) {
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  public clear() {
    CartUtil.clear();
    this.loadCart();
  }
}
