import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GlobalService {

  constructor() { }

  private login = new BehaviorSubject<Boolean>(false);

  public getLogin(){
    return this.login.asObservable();
  }

  public setLogin (val : boolean) {
    this.login.next(val);
  }

}
