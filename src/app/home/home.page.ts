import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  
  constructor(private userService: UserService) {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.userService.getAll().subscribe(dados => {
      console.log(dados)
    });
  }

}
