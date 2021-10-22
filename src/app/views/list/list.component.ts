import { Component, OnInit } from '@angular/core';
import { EntreeService } from 'src/app/shared/services/entree.service';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';



@Component({
 selector: 'app-list',
 templateUrl: './list.component.html',
 styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 // Atibutos
public entryList: any;
 constructor(private slider: LoadScriptsService) {
    slider.Load(["slider"]);
 }

 
 ngOnInit(): void { // Llamar a la petición, para recuperar entradas
 //this.retrieveEntry();
 }

 /** 
// creo el método
 private retrieveEntry(): void {
 this.entreeService.retrieveEntry().subscribe(
 (data) => {
 this.entryList = data;
 },
 (error: Error) => {
 console.log('Error: ', error);
 },
 () => {
 console.log('Petición realizada correctamente');
 }
 );
 }*/
 public showTitle(title: string): void {
 alert(`Entrada seleccionada: ${ title }.`);
 }
}

