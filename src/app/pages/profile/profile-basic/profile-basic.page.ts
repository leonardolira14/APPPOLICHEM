import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-profile-basic',
    templateUrl: './profile-basic.page.html',
    styleUrls: ['./profile-basic.page.scss'],
})
export class ProfileBasicPage implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isEnd = false;
    user = {
        img: 'assets/images/avatar/6.jpg',
        name: 'Eudora Ann',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
    };

    list = [
        {
            img: 'assets/images/card/57.jpg',
            title: 'IONIC Template News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
        {
            img: 'assets/images/card/56.jpg',
            title: 'Angular News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
        {
            img: 'assets/images/card/53.jpg',
            title: 'Android News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isEnd = scrollTop >= 10;
        }
    }

    goTop() {
        this.content.scrollToTop(2000);
    }

}
