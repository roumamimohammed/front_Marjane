import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  products: any[] = [];
  percentage: string = '';
  p: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  get pagedProducts() {
    return this.products;
  }

  addToPromotion(productId: string, percentage: string): void {
    this.productService.addToPromotion(productId, parseInt(percentage)).subscribe(
      (response) => {
        console.log('Product added to promotion successfully:', response);
      },
      (error) => {
        console.error('Error adding product to promotion:', error);
      }
    );
  }
}
