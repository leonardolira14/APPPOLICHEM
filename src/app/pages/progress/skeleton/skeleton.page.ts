import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
    selector: 'app-skeleton',
    templateUrl: './skeleton.page.html',
    styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {
    list: any;

    constructor() {

    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        timer(3000).subscribe(r => {
            this.list = [
                {name: 'Gerald T. Howell', shortName: '@Gerald', img: 'assets/images/avatar/15.jpg'},
                {name: 'Chuck K. Lebrun', shortName: '@Chuck', img: 'assets/images/avatar/14.jpg'},
                {name: 'Anna R. Segrest', shortName: '@Anna', img: 'assets/images/avatar/3.jpg'},
                {name: 'Cynthia L. Busey', shortName: '@Cynthia', img: 'assets/images/avatar/4.jpg'},
                {name: 'Ashley M. Ayala', shortName: '@Ashley', img: 'assets/images/avatar/9.jpg'},
                {name: 'John G. Wright', shortName: '@John', img: 'assets/images/avatar/6.jpg'},
                {name: 'Larry B. Ennis', shortName: '@Larry', img: 'assets/images/avatar/13.jpg'},
                {name: 'Vernon J. Rauscher', shortName: '@Vernon', img: 'assets/images/avatar/8.jpg'},
            ];
        });
    }

}
