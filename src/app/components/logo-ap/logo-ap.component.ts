import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent {

  constructor(private router: Router, private tokenService:TokenService, private loginService: LoginService) { }

  onLogOut():void{
    this.tokenService.logout();
    window.location.reload();
    this.router.navigate(['/'])
  }

}
