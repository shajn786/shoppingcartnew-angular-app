import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 
  pname=""
  constructor(private api : ApiService)
  {

  }
  searchdata:any=[]

  readValues=()=>
  {
    let data:any={"pname":this.pname}
    console.log(data)
    
    this.api.searchData(data).subscribe(

     (response:any)=>
     {
      console.log(response)
      if(response.length == 0)
      {
        alert("invalid name")
      }
      else{
           this.searchdata=response
      }
     }

    )
  }

}
