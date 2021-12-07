import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-list-sliding',
    templateUrl: './list-sliding.page.html',
    styleUrls: ['./list-sliding.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListSlidingPage implements OnInit {
    list = [
        {name: 'Gerald T. Howell', msg: 'Ionic App', time: '12 min ago'},
        {name: 'Chuck K. Lebrun', msg: 'Mobile App', time: '13 min ago'},
        {name: 'Anna R. Segrest', msg: 'Expandable Options', time: '22 min ago'},
        {name: 'Cynthia L. Busey', msg: 'Web Design', time: '1 hours ago'},
        {name: 'Ashley M. Ayala', msg: 'Angular 8+', time: '2 hours ago'},
        {name: 'John G. Wright', msg: 'Ionic Mobile Development', time: '3 hours ago'},
        {name: 'Larry B. Ennis', msg: 'Ionic native', time: '5 hours ago'},
        {name: 'Vernon J. Rauscher', msg: 'Ionic app name', time: '6 hours ago'},
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onDel(item, slidingItem) {
        this.list = this.list.filter(s => s.name !== item.name);
        slidingItem.close();
        this.toastProvider.show('delete success');
    }

    onReply(item, slidingItem) {
        this.toastProvider.show('Reply');
        slidingItem.close();
    }

}
