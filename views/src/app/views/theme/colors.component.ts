import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent {
  constructor(@Inject(DOCUMENT) private _document: any) {}

  existing: boolean = true

  existing_person(event){
    this.existing = true;
    //alert("Exisiting");
  }

  new_person(event){
    this.existing = false;
    //alert("New");
  }
}
