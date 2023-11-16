import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './models/yugi.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) {

   }
  yugilist() :Observable <Root>{
    return this.http.get<Root>(`https://db.ygoprodeck.com/api/v7/cardinfo.php?`)

  }
  yugilist2(x:string| null) :Observable <Root>{
  return this.http.get<Root>(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${x}`)
  
  }
}