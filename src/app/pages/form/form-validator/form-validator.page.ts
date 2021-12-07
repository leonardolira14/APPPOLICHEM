import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-form-validator',
    templateUrl: './form-validator.page.html',
    styleUrls: ['./form-validator.page.scss'],
})
export class FormValidatorPage implements OnInit {
    vForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private toastProvider: ToastProvider) {
        this.vForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        this.toastProvider.show(JSON.stringify(this.vForm.value));
    }

}
