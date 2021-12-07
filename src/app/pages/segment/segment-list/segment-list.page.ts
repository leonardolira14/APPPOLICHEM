import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-segment-list',
    templateUrl: './segment-list.page.html',
    styleUrls: ['./segment-list.page.scss'],
})
export class SegmentListPage implements OnInit {
    selected = 'Order';
    segmentList = ['Order', 'Friend', 'Profile', 'Product', 'Card'];
    cardList = [
        {
            active: false,
            title: 'Abseiling',
            content: 'an adventure sport where the participants descend a steep formation using a rope. (not really a sport).',
            img: 'assets/images/card/64.jpg'
        },
        {
            active: false,
            title: 'Acrobatic Gymnastics',
            content: 'team of gymnasts work together to perform acrobatic moves in combination with dance moves.',
            img: 'assets/images/card/63.jpg'
        },
        {
            active: false,
            title: 'Adventure Racing',
            content: 'an event combining two or more endurance disciplines, such as Orienteering, Cross-Country Running, Mountain Biking, Paddling and Climbing. It is also called Expedition Racing.',
            img: 'assets/images/card/62.jpg'
        },
        {
            active: false,
            title: 'Aerobatics',
            content: 'sport aerobatics involves aircraft maneuvers such as rolls, loops, stall turns (hammerheads), and tailslides.',
            img: 'assets/images/card/61.jpg'
        },
        {
            active: false,
            title: 'Aeronautical Pentathlon',
            content: ' despite the name, the sport has 6 events: shooting, fencing, orienteering, basketball skills, obstacle course and swimming.',
            img: 'assets/images/card/56.jpg'
        }
    ];

    orderList = [
        {
            img: 'assets/images/avatar/14.jpg',
            title: 'Leila Oliver',
            date: '20 August 2021 at 8:19pm',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: 'assets/images/avatar/2.jpg',
            title: 'Arlene Jones',
            date: '20 August 2021 at 8:19pm',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: 'assets/images/avatar/3.jpg',
            title: 'Edwina',
            date: '20 August 2021 at 8:19pm',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: 'assets/images/avatar/15.jpg',
            title: 'Renee Harry',
            date: '20 August 2021 at 8:19pm',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: 'assets/images/avatar/12.jpg',
            title: 'Frederica Joe',
            date: '20 August 2021 at 8:19pm',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    fList = [
        {title: 'Gerald T. Howell', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/12.jpg'},
        {title: 'Chuck K. Lebrun', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/11.jpg'},
        {title: 'Anna R. Segrest', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/10.jpg'},
        {title: 'Cynthia L. Busey', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/13.jpg'},
        {title: 'Ashley M. Ayala', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/14.jpg'},
        {title: 'John G. Wright', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/15.jpg'},
        {title: 'Larry B. Ennis', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/16.jpg'},
        {title: 'Vernon J. Rauscher', content: 'Lorem ipsum dolor sit amet, consectetur', img: 'assets/images/avatar/7.jpg'},
    ];
    pList = [
        {img: 'assets/images/card/1.jpg', cate: 'WOMEN', title: 'shirt', subTitle: 'fitness', price: 99.99},
        {img: 'assets/images/card/3.jpg', cate: 'WOMEN', title: 'shirt', subTitle: 'fitness', price: 23.99},
        {img: 'assets/images/card/1.jpg', cate: 'WOMEN', title: 'shirt', subTitle: 'fitness', price: 56.99},
        {img: 'assets/images/card/3.jpg', cate: 'WOMEN', title: 'shirt', subTitle: 'fitness', price: 7.99},
        {img: 'assets/images/card/1.jpg', cate: 'WOMEN', title: 'shirt', subTitle: 'fitness', price: 8.99},
        {img: 'assets/images/card/3.jpg', cate: 'WOMEN', title: 'shirt', subTitle: 'fitness', price: 6.99}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
