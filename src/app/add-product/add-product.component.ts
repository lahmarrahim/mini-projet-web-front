import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formData = new FormData();

  nom : any = ""
  description : any = ""
  quantite : any = ""
  prix : any = ""
  images : any = ""

  onChange(event: any) {
    this.images = event.target.files[0];
  }

  onClick(){
    this.formData.append('nom', this.nom);
    this.formData.append('description', this.description);
    this.formData.append('quantite', this.quantite);
    this.formData.append('prix', this.prix);
    this.formData.append('images', this.images, this.images.name);
    this.formData.append('images', this.images, this.images.name);

    console.log(this.nom, this.description, this.quantite, this.prix, this.images)
    this.ServicePost.addProduct(this.formData);
  }

  constructor(private ServicePost:ProductServiceService) {}

  ngOnInit(): void {
  }

}
