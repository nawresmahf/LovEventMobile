import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConstants } from "./../../config/auth-constants";

import { StorageService } from "./../../services/storage.service";
import { ToastService } from "./../../services/toast.service";
import { AlertController, LoadingController } from "@ionic/angular";
import { TokenService } from "src/app/services/token.service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  postData = {
    nom: "",
    prenom: "",
    email: "",
    mdp: "",
  };
  loading: any;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private storageService: StorageService,
    private router: Router,
    private alertCtrl: AlertController,
    private tokenService: TokenService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  //validateInputs() {
  //let nom = this.postData.nom.trim();
  //let prenom = this.postData.prenom.trim();
  //let mdp = this.postData.mdp.trim();
  //let email = this.postData.email.trim();

  //return (
  //this.postData.nom &&
  //this.postData.prenom &&
  //this.postData.mdp &&
  //this.postData.email &&
  //email.length > 3 &&
  //nom.length > 3 &&
  //prenom.length > 3 &&
  //mdp.length > 6
  //);
  //}

  //signupAction() {
  //if (this.validateInputs()) {
  //  this.authService.signup(this.postData).subscribe(
  //  (res: any) => {
  //  if (res.userData) {
  // Storing the User data.
  //this.storageService
  //  .store(AuthConstants.AUTH, res.userData)
  //.then((res) => {
  //this.router.navigate(["home"]);
  // });
  //} else {
  //this.toastService.presentToast(
  //"émail déja existant, veuillez entrer un autre émail."
  //);
  // }
  //},
  //(error: any) => {
  //this.toastService.presentToast("Probléme de connection.");
  //}
  //);
  //else {
  //this.toastService.presentToast(
  // "veuillez remplir votrer émail et mot de passe."
  //);
  //}
  //}
  signupAction() {
    this.ShowLoader();
    this.authService.register(this.postData).subscribe(
      (data) => {
        this.loading.dismiss();
        console.log(data);
        this.tokenService.SetToken(data.token);
      },
      (err) => {
        this.loading.dismiss();
        if (err.error.msg) {
          this.ShowErrorAlert(err.error.msg[0].message);
        }
        if (err.error.message) {
          this.ShowErrorAlert(err.error.message);
        }
      }
    );
  }

  async ShowErrorAlert(message) {
    let alert = await this.alertCtrl.create({
      header: "Sign up Error",
      subHeader: "${message}",
      buttons: ["Oui"],
    });
    await alert.present();
  }
  async ShowLoader() {
    this.loading = await this.loadingCtrl.create({
      message: "Authenticating...",
      duration: 2000,
    });
    await this.loading.present();
  }
}
