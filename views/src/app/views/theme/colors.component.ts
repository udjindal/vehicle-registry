import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { routes } from '../../app.routing';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent {

  existing: boolean = true

  number : string = ""
  vehicle_type = "TwoWheeler";

  api_path = environment.api_path;

  selected_owner = "choose owner";
  owners : any;

  owner_type : string = "Visitor";
  phone_number : string = "";
  name : string = "";

  



  constructor(private httpClient: HttpClient){
    this.httpClient.get(this.api_path+'owner').subscribe((res : any)=>{

      if(res.success === true){
        console.log(res);
        this.owners=res.owners;
      }
      else{
        window.alert("unable to connect to backend!")
        window.location.reload();
      }
        
    })
  }

  change_vehicle_type(selected){
    this.vehicle_type=selected;
    console.log(selected)
  }

  change_owner(selected){
    this.selected_owner=selected;
    console.log(selected)
  }

  existing_person(event){
    this.existing = true;
    //alert("Exisiting");
  }

  new_person(event){
    this.existing = false;
    //alert("New");
  }

  add_existing(event){
    console.log(this.number);
    if(this.number === ""){
      window.alert("Enter Vehicle Number!");
    }

    else if(this.selected_owner === "choose owner"){
      window.alert("Select Owner");
    }

    else{
      
      var data = {owner_id : this.selected_owner, category : this.vehicle_type, number : this.number.toLowerCase()};

      this.httpClient.post(this.api_path+'vehicle',data).subscribe((res : any)=>{

        console.log(res.success); 
        if(res.success === true){
          window.alert("New Entry Added");
          this.number = "";
        }
        else{
          window.alert("error");
          return;
        }    
      
      })
    }
  }

  change_owner_type(selected){
    this.owner_type=selected;
    console.log(selected)
  }

  add_new(event){
    console.log(this.number);
    if(this.number === ""){
      window.alert("Enter Vehicle Number!");
    }

    else if(this.phone_number === ""){
      window.alert("Enter Phone Number!");
    }

    else if(this.name === ""){
      window.alert("Enter Name!");
    }

    else{
      var data = {name : this.name.toLowerCase(), category : this.owner_type, number : this.phone_number};

      console.log(data);

      this.httpClient.post(this.api_path+'owner',data).subscribe((res : any)=>{

        console.log(res.success); 
        if(res.success === true){
          var data1 = {number : this.phone_number};
          this.httpClient.get(this.api_path+'owner/'+this.phone_number).subscribe((res:any)=>{
            if(res.success === true){
              var id = res.owner._id;
              var data = {owner_id : id, category : this.vehicle_type, number : this.number.toLowerCase()};

              this.httpClient.post(this.api_path+'vehicle',data).subscribe((res : any)=>{

                console.log(res.success); 
                if(res.success === true){
                  window.alert("New Entry Added");
                  this.number = "";
                  window.location.reload();
                }
                else{
                  window.alert("error3");
                  return;
                }    
              
              })
            }
            else{
              window.alert("error2");
            }
          })
        }
        else{
          window.alert("error1");
          return;
        }    
      
      })
    }
  }

}
