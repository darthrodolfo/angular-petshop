import { User } from '../models/user.model';

export class Security {
  public static setAuthenticatedUser(user: User, token: string) {
    this.setUser(user);
    this.setToken(token);
  }

  public static setUser(user: User) {
    const data = JSON.stringify(user);
    localStorage.setItem('petshopuser', btoa(data));
  }

  public static setToken(token: string) {
    localStorage.setItem('petshoptoken', token);
  }

  public static getUser(): User {
    const data = localStorage.getItem('petshopuser');
    if (data) {
      return JSON.parse(atob(data));
    } else {
      //TODO: Learn how to return a null value and how to receive it on the other side.
      return new User('', '', '', '');
    }
  }

  public static hasToken(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  public static getToken(): string | null {
    const storagedToken = localStorage.getItem('petshoptoken');
    if (storagedToken) {
      return storagedToken;
    } else {
      return null;
    }
  }

  public static clear() {
    localStorage.removeItem('petshoptoken');
    localStorage.removeItem('petshopuser');
  }
}
