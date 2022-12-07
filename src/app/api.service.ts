import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  fetchProducts= ()=>
  {
     return this.http.get("http://localhost:8080/viewall")
  }

  addProducts=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/add",datatosend)
  }

  searchData=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }

  addUser=(data:any)=>
  {
    return this.http.post("http://localhost:8080/register",data)
  }

  fetchUser=(data:any)=>
  {
    return this.http.post("http://localhost:8080/login",data)
  }
}
