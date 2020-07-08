import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SignupPage } from "./signup.page";
import { HttpModule } from "@angular/http";

const routes: Routes = [
  {
    path: "",
    component: SignupPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpModule,
  ],
  declarations: [SignupPage],
})
export class SignupPageModule {}
