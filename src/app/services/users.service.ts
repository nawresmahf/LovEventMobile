import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";
import { User } from "../classes/user";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  url = this.config.hostName;

  constructor(private config: ConfigService, private http: HttpClient) {}

  getAll() {
    return this.http.get<User>(this.url + "/users");
  }

  getUserById(id) {
    return this.http.get<User>(this.url + "/user/" + id);
  }

  getClt() {
    return this.http.get<User[]>(this.url + "/clt");
  }

  getPart() {
    return this.http.get<User[]>(this.url + "/part");
  }

  getNbClt() {
    return this.http.get(this.url + "/nbClt");
  }

  getNbPart() {
    return this.http.get(this.url + "/nbPart");
  }

  ConfigCmpt(id, u) {
    return this.http.put(this.url + "/profil/" + id, u);
  }

  updatePic(id, u) {
    return this.http.put(this.url + "/pic/" + id, u);
  }

  changePass(u) {
    return this.http.post(this.url + "/pass/change", u);
  }

  follow(f) {
    return this.http.post(this.url + "/follow", f);
  }

  unfollow(id) {
    return this.http.delete(this.url + "/unfollow/" + id);
  }

  followers(part) {
    return this.http.get(this.url + "/followers/" + part);
  }

  following(clt) {
    return this.http.get(this.url + "followings/" + clt);
  }
}
