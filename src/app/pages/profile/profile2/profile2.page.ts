import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-profile2',
    templateUrl: './profile2.page.html',
    styleUrls: ['./profile2.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Profile2Page implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isActive = false;
    selected = 'events';
    bgImg = 'assets/images/profile/14.jpg';
    user = {
        name: 'Dana Garcia', img: 'assets/images/avatar/15.jpg',
        intro: 'Lorem ipsum dolor sit amet'
    };
    gList = [
        {
            title: 'Abseiling',
            content: 'an adventure sport where',
            img: 'assets/images/list/21.jpg',
            cate: 'events'
        },
        {
            title: 'Acrobatic',
            content: 'team of gymnasts',
            img: 'assets/images/list/22.jpg',
            cate: 'events'
        },
        {
            title: 'Adventure',
            content: 'an event combining',
            img: 'assets/images/list/23.jpg',
            cate: 'events'
        },
        {
            title: 'Aerobatics',
            content: 'sport aerobatics',
            img: 'assets/images/list/26.jpg',
            cate: 'events'
        },
        {
            title: 'Zora Pepys',
            img: 'assets/images/avatar/2.jpg',
            cate: 'followers'
        },
        {
            title: 'Constance Lily',
            img: 'assets/images/avatar/3.jpg',
            cate: 'followers'
        }, {
            title: 'April Bertie',
            img: 'assets/images/avatar/4.jpg',
            cate: 'followers'
        }, {
            title: 'Amelia Gracie',
            img: 'assets/images/avatar/5.jpg',
            cate: 'followers'
        }, {
            title: 'Marian North',
            img: 'assets/images/avatar/6.jpg',
            cate: 'followers'
        },
        {
            title: 'Jane Commons',
            img: 'assets/images/avatar/7.jpg',
            cate: 'following'
        }, {
            title: 'Sarah Chesterton',
            img: 'assets/images/avatar/8.jpg',
            cate: 'following'
        }, {
            title: 'Tina Holmes',
            img: 'assets/images/avatar/9.jpg',
            cate: 'following'
        }, {
            title: 'Vicky Norton',
            img: 'assets/images/avatar/10.jpg',
            cate: 'following'
        },
        {
            title: 'Delia Tuttle',
            img: 'assets/images/avatar/11.jpg',
            cate: 'following'
        }
    ];
    list = this.gList.filter(s => s.cate === this.selected);

    constructor(private toastProvider: ToastProvider) {

    }

    ngOnInit() {
    }

    segmentChanged(event) {
        this.list = this.gList.filter(s => s.cate === this.selected);
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isActive = scrollTop >= 200;
        }
    }

    onSelectCard(item) {
        this.toastProvider.show(JSON.stringify(item));
    }

}
