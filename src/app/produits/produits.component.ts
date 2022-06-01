import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  list :any[] = [];

  constructor(private ServiceManipulate:ProductServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.ServiceManipulate.getProducts().subscribe((data) => { this.list = data } )
  }

  deleteProduct = (id : String) => {
    this.ServiceManipulate.deleteProduct(id).subscribe( (data ) => {
      this.getData();
  })}

  navigateProduct = (id : String) => {
    this.router.navigateByUrl("/modifierProduit/" + id);
  }  

  
}
