import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';
import 'quill-emoji/dist/quill-emoji';

@Component({
    selector: 'app-form-rich-custom',
    templateUrl: './form-rich-custom.page.html',
    styleUrls: ['./form-rich-custom.page.scss'],
})
export class FormRichCustomPage implements OnInit {
    content: string;
    quillConfig = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                [{direction: 'rtl'}], // text direction
                [{size: ['small', false, 'large', 'huge']}], // custom dropdown
                [{header: [1, 2, 3, 4, 5, 6, false]}],
                ['emoji']
            ]
        },
        'emoji-toolbar': true,
        'emoji-textarea': true,
        'emoji-shortname': true,
    };

    constructor(private toastProvider: ToastProvider) {
    }


    ngOnInit() {
    }

    onSubmit() {
        this.toastProvider.show(this.content);
    }
}
