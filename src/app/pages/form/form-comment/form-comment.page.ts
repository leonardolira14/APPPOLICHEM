import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-form-comment',
    templateUrl: './form-comment.page.html',
    styleUrls: ['./form-comment.page.scss'],
})
export class FormCommentPage implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private toastProvider: ToastProvider) {
        this.form = this.formBuilder.group({
            name: [''],
            title: [''],
            comment: ['']
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        this.toastProvider.show(JSON.stringify(this.form.value));
    }
}
