import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent{

  selected_vehicle = "choose vehicle";
  api_path = environment.api_path;
  vehicles;

  constructor(private httpClient: HttpClient){
    this.httpClient.get(this.api_path+'vehicle').subscribe((res)=>{

        console.log(this.api_path);
        console.log(res.vehicles);
        this.vehicles=res.vehicles;
    })
  }

  change_selected_vehicle(selected){
    this.selected_vehicle=selected;
    console.log(selected)
  }

  entry(event){
    if(this.selected_vehicle=="choose vehicle"){
      window.alert("select vehicle!")
    }
    var v = this.selected_vehicle;

    var filteredObj = this.vehicles.find(function(item, i){
      if(item.number === v){
        return item;
      }
    });

    var id = filteredObj._id;
    console.log(id)

    var data = {vehicle_id : id, movement : "in"};

    this.httpClient.post(this.api_path+'vehicle/newEntry',data).subscribe((res)=>{

      console.log(res.success); 
      if(res.success === true){
        window.alert("New Entry Added");

      }
      else{
        window.alert("error");
      }    
    
    })


  }

  exit(event){
    if(this.selected_vehicle=="choose vehicle"){
      window.alert("select vehicle!")
    }
    var v = this.selected_vehicle;

    var filteredObj = this.vehicles.find(function(item, i){
      if(item.number === v){
        return item;
      }
    });

    var id = filteredObj._id;
    console.log(id)

    var data = {vehicle_id : id, movement : "out"};

    this.httpClient.post(this.api_path+'vehicle/newEntry',data).subscribe((res)=>{

      console.log(res.success); 
      if(res.success === true){
        window.alert("New Entry Added");
        
      }
      else{
        window.alert("error");
      }
    }) 
  }
}
