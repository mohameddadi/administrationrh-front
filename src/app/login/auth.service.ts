import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { AppComponent } from "../app.component";

@Injectable()
export class AuthService {
    
  constructor(public http: Http) { }

  public logIn(user: any){
    let headers = new Headers();
       
    headers.append('Access-Control-Allow-Origin','*');

    let options = new RequestOptions();
    options.headers=headers;

    return this.http.get("http://localhost:8080/account/login/")
      .map((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json().principal;// the returned user object is a principal object
      if (user) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{})
      .map((response: Response) => {
        localStorage.removeItem('currentUser');
      });

  }
}