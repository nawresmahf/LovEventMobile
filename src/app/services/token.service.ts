import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor(private storage: Storage) {
    console.log("Hello TokenService Service");
  }
  SetToken(token) {
    return this.storage.set("auth-token", token);
  }
  DeleteToken() {
    this.storage.remove("auth-token");
  }
  async GetPayload() {
    const token = await this.storage.get("auth-token");
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = JSON.parse(window.atob(payload))
    }
    return payload.data;
  }
}
