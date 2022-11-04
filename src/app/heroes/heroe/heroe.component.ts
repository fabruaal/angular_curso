import { Component } from "@angular/core";

@Component({
    selector: `app-heroe`,
    templateUrl: `heroe.component.html`
})

export class HeroeComponent {

    nombre: string = "iroman";
    edad: number = 45;

    get nombreCapitalizado():String{
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): String {
        return `${this.nombre} - ${this.edad}`
        //return this.nombre + ' ' + this.edad
    }

    cambiaNombre():void{
        this.nombre = "Spiderman";
    }

    cambiaEdad():void{
        this.edad = 35;
    }

}