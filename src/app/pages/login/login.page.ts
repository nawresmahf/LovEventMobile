import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConstants } from "../../config/auth-constants";
import { AuthService } from "./../../services/auth.service";
import { StorageService } from "./../../services/storage.service";
import { ToastService } from "./../../services/toast.service";
//import { NavController, NavParams } from "@ionic/angular";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  postData = {
    email: "",
    mdp: "",
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
  //  public navCtrl: NavController,
    //public navParams: NavParams
  ) {}

  ngOnInit() {}

  validateInputs() {
    console.log(this.postData);
    let email = this.postData.email.trim();
    let mdp = this.postData.mdp.trim();
    return (
      this.postData.email &&
      this.postData.mdp &&
      email.length > 0 &&
      mdp.length > 0
    );
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            // Storing the User data.
            this.storageService
              .store(AuthConstants.AUTH, res.userData)
              .then((res) => {
                this.router.navigate(["home"]);
              });
          } else {
            this.toastService.presentToast("E-mail/mot de passe incorrect  .");
          }
        },
        (error: any) => {
          this.toastService.presentToast("Probléme de connection.");
        }
      );
    } else {
      this.toastService.presentToast(
        "Voulez-vous vérifier votre émail ou mot de passe."
      );
    }
  }
}
