import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { ROUTES } from './shared/routes/app.routes';

import { AuthService } from './shared/service/auth.service';
import { AuthGuard } from './shared/service/auth-guard.service';
import { Bd } from './shared/service/bd.service';

/*App*/
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BannerComponent } from './pages/banner/banner.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

/* Configurando Região  | + LOCALE_ID  */
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

/*  @angular/fire - */
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { PostNewComponent } from './pages/home/post-new/post-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostComponent,
    PostNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AuthService, AuthGuard, Bd, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
