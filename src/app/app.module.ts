import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicStorageModule } from "@ionic/storage";
import { TokenService } from "./services/token.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TokenService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
