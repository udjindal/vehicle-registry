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

  selected_owner = "choose owner";
  vehicle_type = "TwoWheeler";
  api_path = environment.api_path;
  owners : any;
  number : string = ""

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
}
