import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetailPage implements OnInit {
    detail =
        {
            title: 'Fashion Elegant',
            price: 26,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio quis similique exercitationem',
            img: 'assets/images/list/detail.png'
        };

    review = {
        author: 'John Doe',
        date: 'nov 9, 2020 at 11:24 am',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis accusantium corrupti asperiores et\n' +
            '                praesentium dolore.'
    };
    rForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.rForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', [Validators.required]],
            review: ['', [Validators.required]],
        });
    }

    ngOnInit() {
    }

}
