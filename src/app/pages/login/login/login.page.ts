import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertProvider, LoadingProvider} from '../../../shared/providers';
import {timer} from 'rxjs';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider,
                private menu: MenuController) {
        this.loginForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    async login() {
        const username = this.loginForm.controls.name.value;
        const pwd = this.loginForm.controls.pwd.value;
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.alertProvider.present('Login success!');
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }

    onMenu() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }

}
