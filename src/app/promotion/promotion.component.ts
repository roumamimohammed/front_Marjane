import {Component, OnInit} from '@angular/core';
import {PromotionService} from "./promotion.service";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent {
  promotions: any[] = [];
  constructor(private PromotionService: PromotionService) {}
  ngOnInit(): void {
    this.PromotionService.getPromotion().subscribe(
      (data) => {
        this.promotions = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  Accepted(uuidp:string,percentage:number): void {
    this.PromotionService.Accepted(uuidp,percentage).subscribe(
      (response) => {
        console.log('Product Promoted  successfully:', response);
      },
      (error) => {
        console.error('Error adding promotion:', error);
      }
    );
  }
  Refused(uuidp:string,percentage:number): void {
    this.PromotionService.Refused(uuidp,percentage).subscribe(
      (response) => {
        console.log('Product Promoted  successfully:', response);
      },
      (error) => {
        console.error('Error adding promotion:', error);
      }
    );
  }
}
