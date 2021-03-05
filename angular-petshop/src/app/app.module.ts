import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    LoadingComponent,
    ProfilePageComponent,
    SignupPageComponent,
    FramePageComponent,
    ResetPasswordPageComponent,
    PetsPageComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
