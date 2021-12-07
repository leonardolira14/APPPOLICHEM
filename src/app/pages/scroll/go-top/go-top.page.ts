import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-go-top',
    templateUrl: './go-top.page.html',
    styleUrls: ['./go-top.page.scss'],
})
export class GoTopPage implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isEnd = false;
    animationClassName = 'flip-in-ver-right';
    list = [
        {img: 'assets/images/card/1.jpg', name: 'Sabina Milton'},
        {img: 'assets/images/card/2.jpg', name: 'Hedy Burns'},
        {img: 'assets/images/card/3.jpg', name: 'Jodie Edison'},
        {img: 'assets/images/card/4.jpg', name: 'Hedy Burns'},
        {img: 'assets/images/card/5.jpg', name: 'Myrna Bacon'},
        {img: 'assets/images/card/6.jpg', name: 'Mildred Norris'},
        {img: 'assets/images/card/7.jpg', name: 'Queena Malachi'},
        {img: 'assets/images/card/8.jpg', name: 'Dale Donne'},
        {img: 'assets/images/card/9.jpg', name: 'Crystal Austin'},
        {img: 'assets/images/card/2.jpg', name: 'Griselda Carey'},
        {img: 'assets/images/card/3.jpg', name: 'Miranda Whittier'}
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
