import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarUsuarioPage implements OnInit {

  id = 0;
  first_name = '';
  last_name = '';
  email = '';
  avatar = '';

  constructor(private activatedRoute: ActivatedRoute,  private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.userService.getOne(this. id ).subscribe(dados => {
      this.first_name = dados.first_name!;
      this.last_name = dados.last_name!;
      this.email = dados.email!;
      this.avatar = dados.avatar!;
    })
  }

  salvar(){
    const usuario : User = {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      avatar: this.avatar
    }
    this.userService.update(usuario).subscribe(dados => {
      alert("Usuario atualizado com sucesso " + dados.id )
      this.router.navigateByUrl('/home');
    })
  }

}
