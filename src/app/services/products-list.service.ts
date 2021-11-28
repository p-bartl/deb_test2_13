import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsListService {

  constructor(private http:HttpClient) { }

  getProductsList():Observable<[]>{
    
    return this.http.get<[]>('../../assets/data.json')
  }
}