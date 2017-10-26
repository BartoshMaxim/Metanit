import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User} from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    getData() : Observable<User[]>{
        return this.http.get('users.json')
                            .map((resp:Response)=>{
                         
                        let usersList = resp.json().data;
                        let users :User[] = [];
                        for(let index in usersList){
                            let user = usersList[index];
                            users.push({name: user.userName, age: user.userAge});
                        }
                        return users;
                    })
                    .catch((error: any)=> {return Observable.throw(error);});
    }
}