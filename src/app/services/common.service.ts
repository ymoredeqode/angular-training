import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private ls: LocalstorageService) {}

  setData(key: string, data: any) {
    this.ls.setItem(key, JSON.stringify(data));
  }

  getData(key: string) {
    return JSON.parse(this.ls.getItem(key) as any);
  }
}
