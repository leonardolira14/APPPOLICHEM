import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-profile3',
    templateUrl: './profile3.page.html',
    styleUrls: ['./profile3.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Profile3Page implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isActive = false;
    selected = 'events';
    list = [
        {
            avatar: 'assets/images/avatar/5.jpg',
            name: 'Antonia Cowper',
            time: '15min ago',
            img: 'assets/images/card/56.jpg',
            title: 'Ionic Template',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. ',
            likes: 56,
            comments: 12
        },
        {
            avatar: 'assets/images/avatar/6.jpg',
            name: 'Janice Doris',
            time: '35min ago',
            img: 'assets/images/card/57.jpg',
            title: 'Angular',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. ',
            likes: 13,
            comments: 111
        },
        {
            avatar: 'assets/images/avatar/4.jpg',
            name: 'Gemma Gracie',
            time: '25min ago',
            img: 'assets/images/card/44.jpg',
            title: 'Cordova',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. ',
            likes: 67,
            comments: 123
        }
    ];
    galleryList = [
        'assets/images/card/56.jpg',
        'assets/images/card/57.jpg',
        'assets/images/card/60.jpg',
        'assets/images/card/59.jpg',
        'assets/images/card/61.jpg',
        'assets/images/card/45.jpg',
        'assets/images/card/46.jpg',
        'assets/images/card/53.jpg',
        'assets/images/card/62.jpg',
    ];
    img = 'assets/images/profile/17.jpg';

    constructor() {
    }

    ngOnInit() {
    }


    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isActive = scrollTop >= 300;
        }
    }

    segmentChanged(event) {
        // this.list = this.gList.filter(s => s.cate === this.selected);
    }

}
