import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './core/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { ProductsComponent } from './shopping/products/products.component';
import { AdminAuthGuard } from './admin/admin-auth-guard/admin-auth-guard.service';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    CoreModule,
    ShoppingModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
