import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  openAlert:boolean=false;
  name__text:string="";
  constructor() { }
  ngOnInit(): void {
  }
  mostrarConsola(name: string) {
    console.log(name);
    this.openAlert = true;
    this.name__text=name;
    
  }
}

