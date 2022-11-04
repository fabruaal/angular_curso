import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['spiderman', 'Iroman', 'hulk'];

  heroeBorrado: string ='';



  borrarHeroe():void{
    this.heroeBorrado =  this.heroes.pop() || '';
    /* console.log(heroeBorrado); */
  }



}
