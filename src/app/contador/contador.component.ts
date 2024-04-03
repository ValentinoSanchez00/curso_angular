import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit{
  numero:number=0;
constructor(){ 

}
ngOnInit(): void {}

/* persona:Persona={
  nombre : "Valentino",
  edad: 20,
} */

decrementar(){
    this.numero--
}
incrementar(){
  this.numero+=1;
}

}
