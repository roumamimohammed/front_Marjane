import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/product';
  private promotionApiUrl = 'http://localhost:8080/api/productPromotion';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToPromotion(uuid: string,percentage:number): Observable<any> {
    const promotionData = { percentage :percentage,status:"ENcour",product:{uuid:uuid}};
    return this.http.post(this.promotionApiUrl, promotionData);
  }
}
