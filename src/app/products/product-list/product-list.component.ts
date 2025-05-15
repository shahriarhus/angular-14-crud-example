import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'rating', 'stock'];
  
  dataSource = [
    { id: 1, title: 'Essence Mascara Lash Princess', category: 'beauty', price: 9.99, rating: 4.94, stock: 5 },
    { id: 2, title: 'Wireless Bluetooth Headphones', category: 'electronics', price: 49.99, rating: 4.5, stock: 15 },
    { id: 3, title: 'Men\'s Running Shoes', category: 'fashion', price: 79.99, rating: 4.2, stock: 25 },
    { id: 4, title: 'Stainless Steel Water Bottle', category: 'home', price: 19.99, rating: 4.8, stock: 40 }
  ];
}
