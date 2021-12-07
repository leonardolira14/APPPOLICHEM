import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-list-sliding-product',
    templateUrl: './list-sliding-product.page.html',
    styleUrls: ['./list-sliding-product.page.scss']
})
export class ListSlidingProductPage implements OnInit {
    list = [
        {title: 'Gerald T. Howell', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/15.jpg'},
        {title: 'Chuck K. Lebrun', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/2.jpg'},
        {title: 'Anna R. Segrest', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/3.jpg'},
        {title: 'Cynthia L. Busey', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/4.jpg'},
        {title: 'Ashley M. Ayala', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/5.jpg'},
        {title: 'John G. Wright', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/6.jpg'},
        {title: 'Larry B. Ennis', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/7.jpg'},
        {title: 'Vernon J. Rauscher', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/8.jpg'},
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onFollow(name) {
        this.toastProvider.show(name);
    }
}
