import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ScrollDetail} from '@ionic/core';
import {IonContent} from '@ionic/angular';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfilePage implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isActive = false;
    head = {title: 'Welcome to Ionic', subTitle: 'Ionic App', img: 'assets/images/list/24.jpg'};
    list = [
        {
            title: 'Abseiling',
            content: 'an adventure sport where the participants descend a steep formation using a rope. (not really a sport).',
            img: 'assets/images/card/6.jpg'
        },
        {
            title: 'Acrobatic',
            content: 'team of gymnasts work together to perform acrobatic moves in combination with dance moves.',
            img: 'assets/images/card/2.jpg'
        },
        {
            title: 'Adventure',
            content: 'an event combining two or more endurance disciplines, such as Orienteering, Cross-Country Running, Mountain Biking, Paddling and Climbing. It is also called Expedition Racing.',
            img: 'assets/images/card/3.jpg'
        },
        {
            title: 'Aerobatics',
            content: 'sport aerobatics involves aircraft maneuvers such as rolls, loops, stall turns (hammerheads), and tailslides.',
            img: 'assets/images/card/4.jpg'
        },
        {
            title: 'Aeronautical',
            content: ' despite the name, the sport has 6 events: shooting, fencing, orienteering, basketball skills, obstacle course and swimming.',
            img: 'assets/images/card/5.jpg'
        }
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        const height = document.documentElement.clientHeight * 0.4;
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isActive = scrollTop >= height;
        }
    }

    onRead(item) {
        this.toastProvider.show(JSON.stringify(item));
    }

}
