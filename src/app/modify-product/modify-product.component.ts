import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  formData = new FormData();

  nom : any = ""
  description : any = ""
  quantite : any = ""
  prix : any = ""
  id: any = ""
  currentProduct : any

  onClick(){
    this.formData.append('nom', this.nom);
    this.formData.append('description', this.description);
    this.formData.append('quantite', this.quantite);
    this.formData.append('prix', this.prix);

    this.ServicePut.putProduct(this.id , this.formData)

    console.log(this.nom, this.description, this.quantite, this.prix)
  }

  constructor(private ServicePut:ProductServiceService, private routerActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routerActivate.snapshot.paramMap.get('id') ?? '';
    this.ServicePut.getOneProduct(this.id).subscribe( ( data ) => {
      this.nom = data.nom;
      this.description = data.description;
      this.prix = data.prix;
      this.quantite = data.quantite;
    })
  }

}
