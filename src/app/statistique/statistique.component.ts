import {Component, OnInit} from '@angular/core';
import {StatistiqueService} from "./statistique.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {
    countproduct: number = 0;
    countpromotion:number=0;

    constructor(
        private StatistiqueService: StatistiqueService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.StatistiqueService.countproduct().subscribe(
            (productData) => {
                this.countproduct = productData;
                console.log('Product count:', productData);
            },
            (productError) => {
                console.error('Error fetching product count:', productError);
            }
        );

        this.StatistiqueService.countpromotion().subscribe(
            (promotionData) => {
                this.countpromotion = promotionData;
                console.log('Promotion count:', promotionData);
            },
            (promotionError) => {
                console.error('Error fetching promotion count:', promotionError);
            }
        );
    }
}
