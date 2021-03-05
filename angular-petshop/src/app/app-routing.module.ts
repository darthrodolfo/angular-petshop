import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
// import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
// import { AuthService } from './services/auth.service';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FramePageComponent,
  //   canActivate: [AuthService],
  //   children: [
  //     { path: '', component: ProductsPageComponent }
  //   ]
  // },
  { path: 'login', component: LoginPageComponent },
  // { path: 'singup', component: SingupPageComponent },
  // { path: 'reset-password', component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
