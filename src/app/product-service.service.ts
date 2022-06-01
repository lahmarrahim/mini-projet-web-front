import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient, private router: Router) { }

  getProducts(): Observable<any[]> {
    return this.http.get('http://localhost:8090/api/produits/findAll') as Observable<any[]>
  }

  addProduct( data : any) {
    return this.http.post('http://localhost:8090/api/produits/add', data).subscribe((data) => {console.log(data) , this.router.navigateByUrl('/produits')});
  }

  deleteProduct( id : any) {
    return this.http.delete('http://localhost:8090/api/produits/delete/' + id)
  }

  getOneProduct( id : any): Observable<any> {
    return this.http.get('http://localhost:8090/api/produits/find/' + id) as Observable<any>
  }

  putProduct( id : any , data : any) {
    return this.http.put('http://localhost:8090/api/produits/update/' + id , data).subscribe((data) => {
      console.log(data)
      this.router.navigateByUrl('/produits')});
  }
  
}
