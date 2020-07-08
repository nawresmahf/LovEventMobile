import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: "root",
})
export class CommentaireService {
  url = this.config.hostName;

  constructor(private http: HttpClient, private config: ConfigService) {}

  commenterEvt(id, com) {
    return this.http.post(this.url + "/evt/" + id + "/com", com);
  }

  commenterPub(id, com) {
    return this.http.post(this.url + "/pub/" + id + "/com", com);
  }

  suppComPub(id) {
    return this.http.delete(this.url + "/pub/com/" + id );
  }

  suppComEvt(id) {
    return this.http.delete(this.url + "/evt/com/" + id );
  }
}
