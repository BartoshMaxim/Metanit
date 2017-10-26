import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    getFactorial(num: number){
        return this.http.get('/Home/GetFactorial?number=' + num)
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);});
    }
}