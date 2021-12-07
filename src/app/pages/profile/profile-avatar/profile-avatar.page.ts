import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-profile-avatar',
    templateUrl: './profile-avatar.page.html',
    styleUrls: ['./profile-avatar.page.scss'],
})
export class ProfileAvatarPage implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isEnd = false;

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
        this.content.scrollToTop(3000);
    }

}
