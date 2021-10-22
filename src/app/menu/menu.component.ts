import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public miToken: number;
  public userName: string | null;
  constructor() {
    this.miToken = 0;
    this.userName = "";
  }
  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }
  public logout(): void {
    if (localStorage.getItem('personalToken')) {
        Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres salir de la sesión?',
        icon: 'error',
        //timer: 300,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showCloseButton: true,
        preConfirm: (login) => {
       
        },
        allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
        if (result.isConfirmed) {
        if (localStorage.getItem('personalToken')) {
        localStorage.removeItem('personalToken');
        }
        window.location.reload();
        Swal.fire('Se ha finalizado la sesión.')
        }
        }) // fin de pregunta estas seguro?
       
        }
    }
  }

