import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { _throw } from 'rxjs/observable/throw';


@Injectable()
export class EcoleService {

  private apiUrl = 'http://localhost:8082/ecole/';
   
  constructor(private http: Http) {
  }
 
  findAll(): Observable<any>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  addEcole( ecole : any) : Observable<any>{
    return this.http.put(this.apiUrl,ecole)
      .catch((error:any) => _throw(error));
  }

}
