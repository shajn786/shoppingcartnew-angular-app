import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-viewall',
  templateUrl: './user-viewall.component.html',
  styleUrls: ['./user-viewall.component.css']
})
export class UserViewallComponent {

  constructor(private api : ApiService){
    this.api.fetchProducts().subscribe(
    
      (response:any)=>
      {
        this.data =response
      }

    )
  }

  data:any=[]

}
