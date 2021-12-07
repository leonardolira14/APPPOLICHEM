import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-list-image',
    templateUrl: './list-image.page.html',
    styleUrls: ['./list-image.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListImagePage implements OnInit {
    list = [
        {
            img: 'assets/images/list/1.jpg',
            title: 'Iphone 11 Red',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            hidden: true,
            child: [
                {
                    img: 'assets/images/list/2.jpg',
                    title: 'Watch',
                    content: 'Lorem ipsum',
                    price: 99.22
                },
                {
                    img: 'assets/images/list/3.jpg',
                    title: 'Iphone 11 Green',
                    content: 'Lorem ipsum',
                    price: 121.33
                },
                {
                    img: 'assets/images/list/4.jpg',
                    title: 'Iphone 11 Yellow',
                    content: 'Lorem ipsum',
                    price: 567.22
                },
                {
                    img: 'assets/images/list/5.jpg',
                    title: 'Honor 20',
                    content: 'Lorem ipsum',
                    price: 121.33
                }
            ]
        },
        {
            img: 'assets/images/list/2.jpg',
            title: 'Black Watch',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            hidden: true,
            child: [
                {
                    img: 'assets/images/list/4.jpg',
                    title: 'Iphone 11 Yellow',
                    content: 'Lorem ipsum',
                    price: 99.22
                },
                {
                    img: 'assets/images/list/5.jpg',
                    title: 'Honor V20',
                    content: 'Lorem ipsum',
                    price: 121.33
                },
                {
                    img: 'assets/images/list/6.jpg',
                    title: 'Honor Pro',
                    content: 'Lorem ipsum',
                    price: 56.22
                },
                {
                    img: 'assets/images/list/3.jpg',
                    title: 'iPhone 11 Plus',
                    content: 'Lorem ipsum',
                    price: 121.33
                }
            ]
        },
        {
            img: 'assets/images/list/3.jpg',
            title: 'Iphone 11 Green',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            hidden: true,
            child: [
                {
                    img: 'assets/images/list/4.jpg',
                    title: 'Iphone 11 Yellow',
                    content: 'Lorem ipsum',
                    price: 99.22
                },
                {
                    img: 'assets/images/list/5.jpg',
                    title: 'Honor V20',
                    content: 'Lorem ipsum',
                    price: 121.33
                },
                {
                    img: 'assets/images/list/6.jpg',
                    title: 'Honor Pro',
                    content: 'Lorem ipsum',
                    price: 56.22
                },
                {
                    img: 'assets/images/list/3.jpg',
                    title: 'iPhone 11 Plus',
                    content: 'Lorem ipsum',
                    price: 121.33
                }
            ]
        },
        {
            img: 'assets/images/list/5.jpg',
            title: 'Honor V20',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            hidden: true,
            child: [
                {
                    img: 'assets/images/list/4.jpg',
                    title: 'Iphone 11 Yellow',
                    content: 'Lorem ipsum',
                    price: 99.22
                },
                {
                    img: 'assets/images/list/5.jpg',
                    title: 'Honor V20',
                    content: 'Lorem ipsum',
                    price: 121.33
                },
                {
                    img: 'assets/images/list/6.jpg',
                    title: 'Honor Pro',
                    content: 'Lorem ipsum',
                    price: 56.22
                },
                {
                    img: 'assets/images/list/3.jpg',
                    title: 'iPhone 11 Plus',
                    content: 'Lorem ipsum',
                    price: 121.33
                }
            ]
        },
        {
            img: 'assets/images/list/6.jpg',
            title: 'Honor Pro',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            hidden: true,
            child: [
                {
                    img: 'assets/images/list/4.jpg',
                    title: 'Iphone 11 Yellow',
                    content: 'Lorem ipsum',
                    price: 99.22
                },
                {
                    img: 'assets/images/list/5.jpg',
                    title: 'Honor V20',
                    content: 'Lorem ipsum',
                    price: 121.33
                },
                {
                    img: 'assets/images/list/6.jpg',
                    title: 'Honor Pro',
                    content: 'Lorem ipsum',
                    price: 56.22
                },
                {
                    img: 'assets/images/list/3.jpg',
                    title: 'iPhone 11 Plus',
                    content: 'Lorem ipsum',
                    price: 121.33
                }
            ]
        },
        {
            img: 'assets/images/list/7.jpg',
            title: 'S11',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            hidden: true,
            child: [
                {
                    img: 'assets/images/list/4.jpg',
                    title: 'Iphone 11 Yellow',
                    content: 'Lorem ipsum',
                    price: 99.22
                },
                {
                    img: 'assets/images/list/5.jpg',
                    title: 'Honor V20',
                    content: 'Lorem ipsum',
                    price: 121.33
                },
                {
                    img: 'assets/images/list/6.jpg',
                    title: 'Honor Pro',
                    content: 'Lorem ipsum',
                    price: 56.22
                },
                {
                    img: 'assets/images/list/3.jpg',
                    title: 'iPhone 11 Plus',
                    content: 'Lorem ipsum',
                    price: 121.33
                }
            ]
        }
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    toggle(item) {
        item.hidden = !item.hidden;
    }

    onSelect(child) {
        this.toastProvider.show(JSON.stringify(child));
    }

}
