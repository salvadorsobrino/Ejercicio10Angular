import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  operador: string = '';
  resultado: number = 0;
  constructor() {}

  ngOnInit() {}

  public calcular() {
    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      alert('Escriba primero los operandos y después seleccione el operador');
      this.numero1 = 0;
      this.numero2 = 0;
    } else {
      this.numero1 = Number(this.numero1);
      this.numero2 = Number(this.numero2);

      switch (this.operador) {
        case '+':
          this.resultado = this.numero1 + this.numero2;
          break;
        case '-':
          this.resultado = this.numero1 - this.numero2;
          break;
        case '*':
          this.resultado = this.numero1 * this.numero2;
          break;
        case '/':
          this.resultado = this.numero1 / this.numero2;
          break;
      }
    }
  }
}
