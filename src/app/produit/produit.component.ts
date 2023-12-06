import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  products: any[] = [];

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

  addToPromotion(productId: string): void {
    // Assuming you have a service method to add the product to the promotion
    this.productService.addToPromotion(productId).subscribe(
      (response) => {
        console.log('Product added to promotion successfully:', response);
      },
      (error) => {
        console.error('Error adding product to promotion:', error);
      }
    );
  }
}
