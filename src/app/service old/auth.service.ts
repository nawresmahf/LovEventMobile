import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthConstants } from "./../config/auth-constants";
import { HttpService } from "../services/http.service";
import { StorageService } from "../services/storage.service";
import { HttpClient } from "@angular/common/http";
const BASEURL = "http://localhost:5000";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  userData$ = new BehaviorSubject<any>([]);

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    private http: HttpClient
  ) {}

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then((res) => {
      this.userData$.next(res);
    });
  }

  login(postData: any): Observable<any> {
    return this.httpService.post("{BASEURL}/login", postData);
  }

  signup(postData: any): Observable<any> {
    console.log (BASEURL );
    return this.http.post(BASEURL +"/auth", postData);
  }

  logout() {
    this.storageService.clear();
    this.userData$.next("");
    this.router.navigate([""]);
  }
}
