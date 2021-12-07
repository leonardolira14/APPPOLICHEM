import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-checkbox2',
    templateUrl: './checkbox2.page.html',
    styleUrls: ['./checkbox2.page.scss'],
})
export class Checkbox2Page implements OnInit {
    list = [
        {id: 1, title: 'Yedda Hosea', subTitle: 'Yedda', img: 'assets/images/avatar/15.jpg', checked: false},
        {id: 2, title: 'Emily Bush', subTitle: 'Emily', img: 'assets/images/avatar/3.jpg', checked: false},
        {id: 3, title: 'Sigrid Polly', subTitle: 'Sigrid', img: 'assets/images/avatar/4.jpg', checked: false},
        {id: 4, title: 'Tiffany Joe', subTitle: 'Tiffany', img: 'assets/images/avatar/5.jpg', checked: false},
        {id: 5, title: 'Rita Lewis', subTitle: 'Rita', img: 'assets/images/avatar/6.jpg', checked: false},
        {id: 6, title: 'Thera Abe', subTitle: 'Thera', img: 'assets/images/avatar/7.jpg', checked: false},
        {id: 7, title: 'Renee Paul', subTitle: 'Renee', img: 'assets/images/avatar/8.jpg', checked: false},
        {id: 8, title: 'Helen Nora', subTitle: 'Helen', img: 'assets/images/avatar/9.jpg', checked: false}
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onCheck(item) {
        this.toastProvider.show(JSON.stringify(item));
    }

}
