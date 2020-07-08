import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NotifsService {
  url = this.config.hostName;
  constructor(private config: ConfigService, private http: HttpClient) {}

  getUserNotifs(dest) {
    return this.http.get<Notification[]>(this.url + "/notifs/" + dest);
  }
  getUnseen(dest) {
    return this.http.get<Notification[]>(this.url + "/notif/" + dest);
  }
  markSeen(id, n) {
    return this.http.put(this.url + "/vu/" + id, n);
  }

  allSeen(id, n) {
    return this.http.put(this.url + "/vu/" + id, n);
  }
  delNotif(id) {
    return this.http.delete<Notification>(this.url + "/notification/" + id);
  }
}
