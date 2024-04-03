import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  dia:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarDia(newDay: string) {
    //El parseInt solo se puede usar en el ts
    this.dia = parseInt(newDay);
  }


}
