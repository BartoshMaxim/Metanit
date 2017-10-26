import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
    selector: 'my-app',
    template: `<div *ngFor="let user of users"> 
        <p>Имя пользователя: {{user?.name}}</p>
        <p>Возраст пользователя: {{user?.age}}</p> 
    </div>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
    
      users: User[]=[];
      error:any;
      constructor(private httpService: HttpService){}
      ngOnInit(){
       
          this.httpService.getData()
                          .subscribe(
                              data=>this.users=data,
                              error => {this.error = error; console.log(error);}
                          );
      }
  }