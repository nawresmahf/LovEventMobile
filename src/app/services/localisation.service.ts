import { Injectable } from "@angular/core";
import { MatSnackBarComponent } from "../shared components/mat-snack-bar/mat-snack-bar.component";

@Injectable({
  providedIn: "root",
})
export class LocalisationService {
  constructor(private snackBar: MatSnackBarComponent) {}

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          this.snackBar.openSnackBar(err.message, "Erreur", "snackNotif");
          reject(err);
        }
      );
    });
  }
}
