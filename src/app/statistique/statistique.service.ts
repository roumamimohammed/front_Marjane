import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StatistiqueService {
    private apiUrlPromotion = 'http://localhost:8080/api/v1/productPromotion/count';
    private apiUrlProduct = 'http://localhost:8080/api/v1/product/count';

    constructor(private http: HttpClient) {}

    countproduct(): Observable<any> {
        return this.http.get<any[]>(this.apiUrlProduct);
    }

    countpromotion(): Observable<any> {
        return this.http.get<any[]>(this.apiUrlPromotion);
    }
}
