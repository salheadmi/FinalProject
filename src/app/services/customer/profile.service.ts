import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  data: any = {}
  data1: any = [{}]
  constructor(private http:HttpClient, private toastr: ToastrService) { }

  getUserByID(ID: number){
    this.http.get("https://localhost:44309/api/User/getUser/" + ID).subscribe((Response:any)=>{this.data=Response

    localStorage.setItem("fName", Response[0]["fName"])
    localStorage.setItem("lName", Response[0]["lName"])
    localStorage.setItem("email", Response[0]["email"])
    localStorage.setItem("phoneNumber", Response[0]["phoneNumber"])
    localStorage.setItem("password", Response[0]["password"])
    localStorage.setItem("longitude", Response[0]["longitude"])
    localStorage.setItem("latitude", Response[0]["latitude"])
    localStorage.setItem("employmentDate", Response[0]["employmentDate"])
    localStorage.setItem("roleID", Response[0]["roleID"])
    if (Response["salary"] == null) {
      localStorage.setItem("salary", Response[0]["salary"])
    }
    localStorage.setItem("salary", Response[0]["salary"])
  })
  }

  updateUser(form: FormGroup){

    this.http.put('https://localhost:44309/api/User/Update', form).subscribe((Response)=>{

    this.toastr.success('Info Updated');

   },err=>{

     console.log(err);
     this.toastr.error(err);

    })
  }

}
