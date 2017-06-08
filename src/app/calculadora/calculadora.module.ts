


//Nosso domínio

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations:
  [
    CalculadoraComponent
  ],
  exports:[
    CalculadoraComponent
  ], 
  providers:[
    CalculadoraService //O serviço precisa estar em providers
  ]
})
export class CalculadoraModule { }
