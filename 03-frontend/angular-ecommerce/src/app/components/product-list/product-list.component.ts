import { Product } from './../../common/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listProduct();
  }
  listProduct(){
    this.productService.getProductList().subscribe(
      data=>{
        this.products=data;
      }
    )
  }

}
