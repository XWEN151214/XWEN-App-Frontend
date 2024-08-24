import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GencontentService {

  private dataSource = new BehaviorSubject<string>('');
  private titleSource = new BehaviorSubject<string>('');
  currentContent = this.dataSource.asObservable();
  contentTitle = this.titleSource.asObservable();

  constructor() { }

  changeData(data:string, title:string)
  {
    this.dataSource.next(data);
    this.titleSource.next(title);
  }
}
