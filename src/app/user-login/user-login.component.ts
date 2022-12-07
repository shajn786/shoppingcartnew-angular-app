import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""
  password=""

  userdata:any =[]

  constructor(private api : ApiService,private route : Router)
  {
    
  }

 

  readValues=()=>
  {
    let data:any = {"email":this.email}
    let data1:any = {"password":this.password}
    console.log(data)
    console.log(data1)
    this.api.fetchUser(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response[0][5]==data[0] && response[0][6]==data1[0] )
        {
          alert("valid")
          this.route.navigate(["/userviewall"])

        }
        else{
          alert("invalid")
        }
        
      }

    )
   
    console.log(this.userdata.email)
    
  }

}
