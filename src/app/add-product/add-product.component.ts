import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  pname=""
  image=""
  category=""
  description=""
  price=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let data:any ={"pname":this.pname,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
    this.api.addProducts(data).subscribe(

     (response:any)=>
     {
        console.log(response)
     }

    )
  }

}
