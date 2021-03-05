import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfig} from './interceptor/httpconfig.interceptor';

import { AppRoutingModule } from './app-routing.module';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppComponent } from './app.component';

import { PinComponent } from './component/pin/pin.component';
import { QueComponent } from './component/que/que.component';
import { AdminComponent } from './component/admin/admin.component';
import { LaunchComponent } from './component/launch/launch.component';

import { MaterialModule } from "./material.module";

import { AuthService } from './service/auth.service';

import { QueService } from './service/que.service';

@NgModule({
  declarations: [
    AppComponent,
    PinComponent,
    QueComponent,
    AdminComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxQRCodeModule
  ],
  exports:[
    PinComponent,
    QueComponent,
    AdminComponent,
    LaunchComponent
  ],
  providers: [AuthService, QueService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfig,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
