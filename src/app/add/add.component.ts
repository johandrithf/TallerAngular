import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title: string = 'Operación';
  number1: number = 0;
  number2: number = 0;
  resultado: string = "0";
  constructor() { }

  ngOnInit(): void {
  }
  Sumar(): void{
    this.resultado = (this.number1 + this.number2).toString();
  }

  Restar(): void{
    this.resultado = (this.number1 - this.number2).toString();
  }
  Multiplicar():void{
    this.resultado=(this.number1*this.number2).toString();
  }
  Dividir():void{
    if(this.number2==0){
      this.resultado="No se puede dividir por cero";
    }else{
      this.resultado=(this.number1/this.number2).toString();
    }
  }
}
