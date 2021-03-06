import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44321/api/cars/'

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newpath = this.apiUrl + 'getcardetails' 
    return this.httpClient.get<ListResponseModel<CarDetail>>(newpath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'getcarsbybrandid?brandId=' + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

 getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
   let newPath = this.apiUrl + 'getcarsbycolorid?id=' + colorId
   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
 }

}
