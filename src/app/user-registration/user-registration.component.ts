import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  phno=""
  email=""
  password=""
  confirmpassword=""

  constructor(private api : ApiService)
  {}

  readValues=()=>
  {
    let data:any ={"name":this.name,"address":this.address,"phno":this.phno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
    this.api.addUser(data).subscribe(

     (response :any)=>
     {
         console.log(response)
     }

    )
    
  }

}
