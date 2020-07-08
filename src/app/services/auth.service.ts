import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import "rxjs/add/operator/map";
import { Http } from "@angular/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url = this.config.hostName;
  private token: string;
  private utl;

  constructor(private http: Http, private config: ConfigService) {}

  login(user) {
    return this.http.post(this.url + "/login", user).map((res) => {
      const resultat = res.json();
      if (resultat && resultat.token) {
        localStorage.setItem("token", resultat.token);
        console.log(resultat);
        return resultat;
      }
    });
  }

  register(user) {
    return this.http.post(this.url + "/auth", user);
  }

  loggedIn() {
    const helper = new JwtHelperService();

    const token = this.getToken();

    if (!token) {
      console.log("No token found");
      return false;
    }

    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);

    return !isExpired;
  } // the result will be true or false

  getToken() {
    this.token = localStorage.getItem("token");
    return this.token;
  }

  utlConnecte() {
    this.utl = localStorage.getItem("utl");
    return JSON.parse(this.utl);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("utl");
  }

  tokenSave(token) {
    localStorage.setItem("token", token);
  }

  utlSave(utl) {
    localStorage.setItem("utl", JSON.stringify(utl));
  }

  activerCmpt(token, user) {
    return this.http.post(this.url + "/activer/" + token, user);
  }
}
