import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productSelected:boolean=false;
  selectedCategory:any;
  addSelected:boolean=false;

  onCategorySelected(product:any){
    this.productSelected=true;
    this.selectedCategory=product;
  }

  onAddCart(){
    this.addSelected=this.selectedCategory;
  }


}
