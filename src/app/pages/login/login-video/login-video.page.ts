import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertProvider, LoadingProvider} from '../../../shared/providers';
import {timer} from 'rxjs';

@Component({
    selector: 'app-login-video',
    templateUrl: './login-video.page.html',
    styleUrls: ['./login-video.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginVideoPage implements OnInit {
    lForm: FormGroup;
    logoList = ['logo-instagram', 'logo-pinterest', 'logo-twitter'];
    animationClass = 'bounce-in-fwd';

    constructor(private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider,
                private formBuilder: FormBuilder) {
        this.lForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    async onLogin() {
        const username = this.lForm.controls.email.value;
        const pwd = this.lForm.controls.pwd.value;
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.alertProvider.present('Login success!');
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }

}
