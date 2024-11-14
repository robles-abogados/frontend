import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../../../services/seguridad.service';
import { Login, Usuario } from '../../../models/seguridad.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: Login;
  usuario: Usuario;

  showPass: boolean;
  mensaje: string;

  constructor( private segurudadService: SeguridadService) { 
    this.loginData = {};
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    this.segurudadService.autenticar(this.loginData).subscribe((res: any) => {
      if(res.status) {
        this.usuario = res.data.usuario;
        this.addDataLocal(res.data);
        this.mensaje = "Autenticación exitosa :) / "+ res.data.usuario.nombreCompleto;
      } else {
        this.mensaje = res.text;
      }
    });
  }

  addDataLocal(data: any){
    localStorage.setItem("TOKEN", data.token);
    localStorage.setItem("USUARIO_SESSION", data.usuario.usuario);
    localStorage.setItem("NRO_DOCUMENTO", data.usuario.nroDocumento);
    localStorage.setItem("NOMBRE_COMPLETO", data.usuario.nombreCompleto);
    localStorage.setItem("ID_USUARIO", data.usuario.idUsuario);
    localStorage.setItem("LOGIN", '1');
  }
}
