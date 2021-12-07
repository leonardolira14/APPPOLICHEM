import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import {AgmCoreModule} from '@agm/core';
import {QuillModule} from 'ngx-quill';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
            mode: 'ios',
            backButtonText: ''
        }),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAeU5JWEHeUFFXI3QSbde3FDl95_2lQjSM'
        }),
        AppRoutingModule,
        ComponentsModule,
        AngularFireModule.initializeApp(environment.firebase),
        QuillModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
