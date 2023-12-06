import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl = 'http://localhost:8080/api/productPromotion';



  constructor(private http: HttpClient) {}

  getPromotion(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  Accepted(uuidp:string,percentage:number): Observable<any> {
    const promotionData = { percentage :percentage,uuid:uuidp,status:"accepted",product:{uuid:""}};
    return this.http.put(this.apiUrl, promotionData);
  }
  Refused(uuidp:string,percentage:number): Observable<any> {
    const promotionData = { percentage :percentage,uuid:uuidp,status:"refused",product:{uuid:""}};
    return this.http.put(this.apiUrl, promotionData);
  }
}
