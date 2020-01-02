import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
@Injectable()
export class EnseignentService {

  private apiUrl = 'http://localhost:8082/enseignents/';
  private enseignentApi = 'http://localhost:8082/enseignent/';
 
  constructor(private http: Http) {
  }
 
  findAll(): Observable<any>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findEnseignentById(id : any): Observable<any>  {
    return this.http.get(this.enseignentApi+ id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  addEnseignent( enseignent : any) : Observable<any>{

    return this.http.put(this.enseignentApi,enseignent)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
