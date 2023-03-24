import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  isLogged=false;
  isLogginFail=false;
  login!:login;
  nombreUsuario!: string;
  password! : string
  roles : string[] = [];
  errorMsj!: string

  constructor(private tokenService: TokenService, private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.login= new login(this.nombreUsuario, this.password);
      this.loginService.login(this.login).subscribe(data=>{
        console.log(data)
        this.isLogged=true;
        this.isLogginFail= false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities)
        this.roles = data.authorities
        this.router.navigate(['/perfil'])
      

      }
      , err =>{
          alert("Usuario o contraseña invalidos")

          this.isLogged = false;
          this.isLogginFail= true;
          this.errorMsj= err.error.mensaje;
          console.log(this.errorMsj)
        }
        );
  }


}
