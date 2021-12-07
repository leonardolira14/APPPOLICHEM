import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertProvider, LoadingProvider} from '../../../shared/providers';
import {timer} from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login1',
    templateUrl: './login1.page.html',
    styleUrls: ['./login1.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Login1Page implements OnInit {
    lForm: FormGroup;
    logoList = ['logo-instagram', 'logo-pinterest', 'logo-twitter'];
    animationClass = 'bounce-in-fwd';

    constructor(private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider,
                private formBuilder: FormBuilder,
                private route:Router
                ) {
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
                this.alertProvider.present('Bienvenido!');
                this.route.navigateByUrl('/inicio')
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }

}
