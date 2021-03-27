import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { user } from'../../interfaces/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  abc = false

  u: user = {id:'', password:''}

  login(): void {
    this.UserService.login(this.u)
    return
  }

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

}
