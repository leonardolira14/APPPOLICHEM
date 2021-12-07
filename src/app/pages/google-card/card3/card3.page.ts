import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-card3',
    templateUrl: './card3.page.html',
    styleUrls: ['./card3.page.scss'],
})
export class Card3Page implements OnInit {
    list = [
        {
            title: 'Abseiling',
            content: 'an adventure sport where the participants descend a steep formation using a rope. (not really a sport).',
            img: 'assets/images/card/1.jpg'
        },
        {
            title: 'Acrobatic Gymnastics',
            content: 'team of gymnasts work together to perform acrobatic moves in combination with dance moves.',
            img: 'assets/images/card/2.jpg'
        },
        {
            title: 'Adventure Racing',
            content: 'an event combining two or more endurance disciplines, such as Orienteering',
            img: 'assets/images/card/3.jpg'
        },
        {
            title: 'Aerobatics',
            content: 'sport aerobatics involves aircraft maneuvers such as rolls, loops',
            img: 'assets/images/card/4.jpg'
        },
        {
            title: 'Aeronautical Pentathlon',
            content: ' despite the name, the sport has 6 events: shooting, fencing, orienteering, basketball skills',
            img: 'assets/images/card/5.jpg'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
