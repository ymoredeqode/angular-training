import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialExampleModule } from '../material.module';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { PaginatedTableComponent } from './shared/paginated-table/paginated-table.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { UserProfileFormComponent } from './shared/user-profile-form/user-profile-form.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, HeaderComponent, PaginatedTableComponent, UserProfileFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
