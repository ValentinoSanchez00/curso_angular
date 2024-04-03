import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  persona={
    nombre:'',
    edad:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  procesar(){
    console.log(this.persona);
  }

}
