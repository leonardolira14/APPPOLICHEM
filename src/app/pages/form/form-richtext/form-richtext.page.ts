import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';
import 'quill-emoji/dist/quill-emoji';

@Component({
    selector: 'app-form-richtext',
    templateUrl: './form-richtext.page.html',
    styleUrls: ['./form-richtext.page.scss'],
})
export class FormRichtextPage implements OnInit {
    content: string;
    quillConfig = {
        'emoji-toolbar': true,
        'emoji-textarea': true,
        'emoji-shortname': true,
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['code-block'],
                // [{header: 1}, {header: 2}], // custom button values
                [{list: 'ordered'}, {list: 'bullet'}],
                // [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                [{indent: '-1'}, {indent: '+1'}], // outdent/indent
                [{direction: 'rtl'}], // text direction
                [{size: ['small', false, 'large', 'huge']}], // custom dropdown
                [{header: [1, 2, 3, 4, 5, 6, false]}],
                ['image'],                                    // image
                ['code-block'], // code block
                [{align: []}],
                ['clean'], // remove formatting button
                ['link', 'image', 'video'],
                ['emoji']
            ]
        }
    };

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.toastProvider.show(this.content);
    }

}
