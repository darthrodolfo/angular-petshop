import { CartItem } from './card-item.model';

export class Cart {
  constructor(public items: CartItem[] = []) {}
}
