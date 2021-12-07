import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertProvider, LoadingProvider} from '../../../shared/providers';

@Component({
    selector: 'app-sign-up1',
    templateUrl: './sign-up1.page.html',
    styleUrls: ['./sign-up1.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SignUp1Page implements OnInit {
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

}
