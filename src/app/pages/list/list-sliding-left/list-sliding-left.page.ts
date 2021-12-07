import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-list-sliding-left',
    templateUrl: './list-sliding-left.page.html',
    styleUrls: ['./list-sliding-left.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListSlidingLeftPage implements OnInit {
    list = [
        {name: 'Sport', content: 'Lorem ipsum dolor sit amet', img: 'assets/images/card/78.jpg'},
        {name: 'Sport', content: 'Lorem ipsum dolor sit amet', img: 'assets/images/card/61.jpg'},
        {name: 'Sport', content: 'Lorem ipsum dolor sit amet', img: 'assets/images/card/56.jpg'},
        {name: 'Sport', content: 'Lorem ipsum dolor sit amet', img: 'assets/images/card/77.jpg'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onDel(item, slidingItem) {
        this.list = this.list.filter(s => s.name !== item.name);
        slidingItem.close();
    }

}
