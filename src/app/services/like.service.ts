import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { Like } from "../classes/like";

@Injectable({
  providedIn: "root",
})
export class LikeService {
  url = this.config.hostName;
  constructor(private http: HttpClient, private config: ConfigService) {}

  likeEvt(id, like) {
    return this.http.post<Like>(this.url + "/evt/" + id + "/like", like);
  }

  likePub(id, like) {
    return this.http.post<Like>(this.url + "/pub/" + id + "/like", like);
  }
}
