import {Injectable} from '@angular/core';
import {ContentModel, ContentModel2, ContentModel3, ContentModel4} from '../model';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor() {
    }

    getBannerList(): Array<ContentModel> {
        return [
            {title: 'Welcome to Ionic', img: 'assets/images/banner/1.jpg'},
            {title: 'Welcome to Dark', img: 'assets/images/banner/2.jpg'},
            {title: 'Responsive Design', img: 'assets/images/banner/3.jpg'},
            {title: 'Easy Customize', img: 'assets/images/banner/4.jpg'},
            {title: 'Ionic Template', img: 'assets/images/banner/5.jpg'},
            {title: 'UI Components', img: 'assets/images/banner/6.jpg'},
            {title: 'Ionic Native', img: 'assets/images/banner/7.jpg'}
        ].sort(() => Math.random() - 0.5).slice(0, 5);
    }

    getList(): Array<ContentModel2> {
        return [
            {icon: 'laptop', title: 'Design', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
            {icon: 'code', title: 'Ionic Native', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
            {
                icon: 'appstore',
                title: 'UI Components',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {icon: 'cog', title: 'Publishing ', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        ];
    }

    getFList(): Array<ContentModel3> {
        return [
            {
                title: 'Responsive',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet, consectetur adipisicing.'
            },
            {
                title: 'Ionic Native',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet, consectetur adipisicing.'
            },
            {
                title: 'UI Components',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet, consectetur adipisicing.'
            },
            {
                title: 'Support',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet, consectetur adipisicing.'
            },
        ];
    }

    getTList(): Array<ContentModel4> {
        return [
            {name: 'Burton Simpson', img: 'assets/images/avatar/team2.jpg'},
            {name: 'Burton Simpson', img: 'assets/images/avatar/team2.jpg'},
            {name: 'Burton Simpson', img: 'assets/images/avatar/team2.jpg'},
            {name: 'Burton Simpson', img: 'assets/images/avatar/team2.jpg'}
        ];
    }

    getNewList(): Array<ContentModel> {
        return [
            {title: 'Ionic Template', img: 'assets/images/home/1.jpg'},
            {title: 'Ionic Template', img: 'assets/images/home/1.jpg'},
            {title: 'Ionic Template', img: 'assets/images/home/1.jpg'},
            {title: 'Ionic Template', img: 'assets/images/home/1.jpg'},
        ];
    }

    getPList() {
        return [
            {cate: 'Ios', img: 'assets/images/home/1.jpg'},
            {cate: 'Ios', img: 'assets/images/home/1.jpg'},
            {cate: 'Android', img: 'assets/images/home/1.jpg'},
            {cate: 'Android', img: 'assets/images/home/1.jpg'},
            {cate: 'Mobile', img: 'assets/images/home/1.jpg'},
            {cate: 'Mobile', img: 'assets/images/home/1.jpg'}
        ];
    }


}
