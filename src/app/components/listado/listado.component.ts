import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  usuarios:any[]=[];  
  card:boolean=false;
  numero: any;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    //Traemos todos los usuarios del servicio(UserService)
    let getUsers = this._userService.getUsers()
                .subscribe(res=>{
                  this.usuarios=res;
                  console.log(this.usuarios);                  
                  getUsers.unsubscribe();
                })
  }
  showCard(idx){
    console.log(idx);
    this.numero = idx;
    this.card=!this.card;
  } 

}
