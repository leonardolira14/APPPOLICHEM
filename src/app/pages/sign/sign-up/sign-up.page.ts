import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AlertProvider, LoadingProvider} from '../../../shared/providers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {timer} from 'rxjs';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SignUpPage implements OnInit {
    rForm: FormGroup;

    constructor(private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider,
                private formBuilder: FormBuilder) {
        this.rForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', [Validators.required, Validators.minLength(3)]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    async onSignUp() {
        const email = this.rForm.controls.email.value;
        const pwd = this.rForm.controls.pwd.value;
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.alertProvider.present('Login success!');
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }

}
