import { Component } from '@angular/core';
import { googleSigninConfig } from './google-signin-module/google-signin.config'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  googleClientId="262091523626-tu5ffnitduakqqanvmf6m84rbg2co5ra.apps.googleusercontent.com";
  onGoogleSigninSuccess(data){
    console.log(data);
  }
}
