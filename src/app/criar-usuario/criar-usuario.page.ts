import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.page.html',
  styleUrls: ['./criar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CriarUsuarioPage implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  avatar = '';
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

    salvar(){
      const usuario : User = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        avatar: this.avatar
      }
        this.userService.create(usuario).subscribe(dados => {
          alert("Usuario inserido com sucesso, id: " + dados.id)
          this.router.navigateByUrl('/home');
        })
    }
} 
