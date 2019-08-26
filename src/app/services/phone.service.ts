import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoneDetails } from '../models/phone';
import { Observable, of } from 'rxjs';
import { phoneData } from './phone-stub'

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  allPhoneDetail: IPhoneDetails
  page = 0;
  constructor(private http: HttpClient) {
    this.allPhoneDetail =  phoneData
   }

  // public load(plate: string): Observable<Phone[]>{
  //   return this.http.get<Vehicle[]>(`http://localhost:5000/api/vehicle/list?page=${++this.page}&pageSize=30&plate=${plate}`)
  // }

  // public getById(id: number): Observable<Vehicle> {
  //   return this.http.get<Vehicle>(`http://localhost:5000/api/vehicle?id=${id}`)
  // }

  // public reset(){
  //   this.page = 0;
  // }

  public getPhone() : Observable<IPhoneDetails> {
    return of(this.allPhoneDetail)
  }

  public getPhoneById(phoneId) : Observable<any> {
    const phoneById = this.allPhoneDetail.products.filter(x => x.id == phoneId)
    return of(phoneById)
  }
}
