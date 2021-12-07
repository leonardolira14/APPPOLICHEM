import {Component, QueryList, ViewChildren} from '@angular/core';

import {IonRouterOutlet, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ToastProvider} from './shared/providers';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    lastBackPress = 0;
    timePeriodToExit = 2000;
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
    public pageList = [
        {
            iconName: 'home', displayText: 'Home', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'home', displayText: 'Home', url: '/home'},
                {iconName: 'basketball', displayText: 'Portfolio', url: '/home-portfolio'},
                {iconName: 'briefcase', displayText: 'Shop Page', url: '/home-shop'},
                {iconName: 'boat', displayText: 'Blog Page', url: '/home-blog'}
            ]
        },
        {
            iconName: 'list', displayText: 'List Page', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'card', displayText: 'List Comment', url: '/list-comment'},
                {iconName: 'cash', displayText: 'List Timeline', url: '/list-comment-timeline'},
                {iconName: 'clock', displayText: 'List News', url: '/list-news'},
            ]
        },
        {
            iconName: 'cube', displayText: 'Product List', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'egg', displayText: 'Product Card', url: '/list-card'},
                {iconName: 'cut', displayText: 'Product List', url: '/list'},
            ]
        },
        {
            iconName: 'flame', displayText: 'Animation List', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'flask', displayText: 'Flip List ', url: '/flip-list'},
                {iconName: 'headset', displayText: 'Slide List', url: '/slide-list'},
                {iconName: 'infinite', displayText: 'Slide Left List', url: '/slide-list-left'},
                {iconName: 'leaf', displayText: 'Rotate List', url: '/slide-list-rotate'},
                {iconName: 'medal', displayText: 'Rotate2 List', url: '/list-rotate'},
                {iconName: 'medical', displayText: 'Swirl List', url: '/list-swirl'},
                {iconName: 'nuclear', displayText: 'Fade List', url: '/fade-list'},
                {iconName: 'pin', displayText: 'Fade BL List', url: '/fade-list2'},
            ]
        },
        {
            iconName: 'md-person', displayText: 'Sign In', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'snow', displayText: 'Sign In', url: '/login'},
                {iconName: 'train', displayText: 'Sign In Animation', url: '/login1'},
                {iconName: 'thermometer', displayText: 'Sign In Video', url: '/login-video'},
            ]
        },
        {
            iconName: 'md-person', displayText: 'Sign Up', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'star-half', displayText: 'Sign Up', url: '/sign-up'},
                {iconName: 'star-outline', displayText: 'Sign Up Background Img', url: '/sign-up1'},
                {iconName: 'star', displayText: 'Home Blog', url: '/home-blog'}
            ]
        },
        {
            iconName: 'radio-button-on', displayText: 'Profile Page', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'map', displayText: 'Profile Basic', url: '/profile-basic'},
                {iconName: 'magnet', displayText: 'Profile List', url: '/profile4'},
                {iconName: 'moon', displayText: 'Profile Avatar', url: '/profile-avatar'},
                {iconName: 'microphone', displayText: 'Profile Slides', url: '/profile-slide'},
                {iconName: 'git-commit', displayText: 'Profile Slides2', url: '/profile-slide2'},
                {iconName: 'grid', displayText: 'Profile About', url: '/profile-img-list'},
                {iconName: 'grid', displayText: 'Profile List', url: '/profile-list'},
                {iconName: 'moon', displayText: 'Profile List', url: '/profile-list2'},
                {iconName: 'moon', displayText: 'Profile List', url: '/profile-list3'},
            ]
        },
        {
            iconName: 'grid', displayText: 'List', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'flashlight', displayText: 'List', url: '/list'},
                {iconName: 'finger-print', displayText: 'List Image', url: '/list-image'},
                {iconName: 'git-branch', displayText: 'List Full Image', url: '/list-full-img'},
                {iconName: 'gift', displayText: 'List Checkbox', url: '/list-checkbox'}
            ]
        },
        {
            iconName: 'fitness', displayText: 'List Drag and Drop', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'flash-off', displayText: 'List Drag And Drop', url: '/list-drag'},
                {iconName: 'eye', displayText: 'List Product Drag', url: '/list-drag-product'},
                {iconName: 'contrast', displayText: 'List Friend Drag', url: '/list-drag-friend'},
            ]
        },
        {
            iconName: 'code', displayText: 'List Sliding', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'cloud', displayText: 'Sliding List', url: '/list-sliding'},
                {iconName: 'cog', displayText: 'sliding-product', url: '/list-sliding-product'},
                {iconName: 'code-download', displayText: 'Left sliding', url: '/list-sliding-left'},
            ]
        },

        {
            iconName: 'flower', displayText: 'Google Cards', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'hand', displayText: 'Card Right', url: '/card'},
                {iconName: 'link', displayText: 'Card Left', url: '/card-left'},
                {iconName: 'move', displayText: 'Card Top', url: '/card-top'},
                {iconName: 'pie', displayText: 'Card Bottom', url: '/card-bottom'},
                {iconName: 'play', displayText: 'Google Card', url: '/card2'},
                {iconName: 'play-circle', displayText: 'News Card', url: '/card3'},
                {iconName: 'pricetag', displayText: 'Travel Card', url: '/card4'},
            ]
        },
        {
            iconName: 'rose', displayText: 'Profile', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'shirt', displayText: 'Profile', url: '/profile'},
                {iconName: 'wine', displayText: 'Profile2', url: '/profile2'},
                {iconName: 'wifi', displayText: 'Profile3', url: '/profile3'},
                {iconName: 'water', displayText: 'Profile Wrapper', url: '/profile-wrapper'},
            ]
        },


        {
            iconName: 'git-compare', displayText: 'Slides', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'list', displayText: 'Full Slides', url: '/full-slides'},
                {iconName: 'tv', displayText: 'Slides Coverflow', url: '/slides-animation-coverflow'},
                {iconName: 'umbrella', displayText: 'Slides Cube', url: '/slides-cube'},
                {iconName: 'undo', displayText: 'Slides Fade', url: '/slides-fade'},
                {iconName: 'transgender', displayText: 'Slides Flip', url: '/slides-flip'}
            ]
        },
        {
            iconName: 'image', displayText: 'Gallery', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'images', displayText: 'Gallery1', url: '/gallery'},
                {iconName: 'images', displayText: 'Gallery2', url: '/gallery/gallery-list1'},
            ]
        },
        {
            iconName: 'jet', displayText: 'Splash Screen', expanded: false, hasChild: false, url: '/splash-screen'
        },
        {
            iconName: 'help-buoy', displayText: 'Checkbox and Radio Group', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'heart-half', displayText: 'Checkbox Simple', url: '/checkbox1'},
                {iconName: 'man', displayText: 'Checkbox Avatar', url: '/checkbox2'},
                {iconName: 'key', displayText: 'Radio Group', url: '/radio'},
            ]
        },
        {
            iconName: 'locate', displayText: 'Search', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'happy', displayText: 'Search', url: '/search'},
                {iconName: 'hand', displayText: 'Search Animation', url: '/search2'}
            ]
        },
        {
            iconName: 'cafe', displayText: 'Progress', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'boat', displayText: 'Loading', url: '/loading'},
                {iconName: 'bluetooth', displayText: 'Progress', url: '/progress'},
                {iconName: 'briefcase', displayText: 'Skeleton Avatar', url: '/skeleton'},
                {iconName: 'call', displayText: 'Skeleton List', url: '/skeleton-list'},
                {iconName: 'chatbubbles', displayText: 'Skeleton List2', url: '/skeleton-list2'},
                {iconName: 'git-merge', displayText: 'Skeleton Text and Img', url: '/skeleton-text'},
                {iconName: 'notifications-outline', displayText: 'Spinner', url: '/spinner'},
                {iconName: 'paper', displayText: 'Custom Spinner', url: '/custom-spinner'}
            ]
        },
        {
            iconName: 'paw', displayText: 'Tabs', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'pizza', displayText: 'Tabs Default', url: '/tabs-default'},
                {iconName: 'pint', displayText: 'Tabs Custom', url: '/tabs-custom'},
                {iconName: 'pricetags', displayText: 'Tabs Bottom', url: '/tabs-bottom'}
            ]
        },
        {
            iconName: 'refresh', displayText: 'Forms', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'pulse', displayText: 'Form Sample', url: '/form-comment'},
                {iconName: 'qr-scanner', displayText: 'Form Validator', url: '/form-validator'},
                {iconName: 'nutrition', displayText: 'Form RichText', url: '/form-richtext'},
                {iconName: 'microphone', displayText: 'Rich Custom Tools', url: '/form-rich-custom'}
            ]
        },
        {
            iconName: 'bowtie', displayText: 'Toggle and Select', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'barcode', displayText: 'With Avatar', url: '/toggle-avatar'},
                {iconName: 'basket', displayText: 'Toggle Left', url: '/toggle-left'},
                {iconName: 'bonfire', displayText: 'Select', url: '/select'}
            ]
        },
        {
            iconName: 'beer', displayText: 'Segment', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'bookmarks', displayText: 'Segment List', url: '/segment-list'},
                {iconName: 'aperture', displayText: 'Segment Card', url: '/segment-card'},
            ]
        },
        {
            iconName: 'hammer', displayText: 'Alert', expanded: false, hasChild: false, url: '/alert'
        },
        {
            iconName: 'stopwatch', displayText: 'Scroll', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'trending-down', displayText: 'Go Top', url: '/go-top'},
                {iconName: 'trending-down', displayText: 'Go Bottom', url: '/go-bottom'},
                {iconName: 'trending-down', displayText: 'Go Position', url: '/go-position'},
            ]
        },

    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private toastProvider: ToastProvider,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.backButton();
        });
    }


    backButton() {
        this.platform.backButton.subscribe(async () => {
            this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
                if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                } else {
                    if (new Date().getTime() - this.lastBackPress < this.timePeriodToExit) {
                        navigator['app'].exitApp();
                    } else {
                        this.toastProvider.show('Press back again to exit App');
                        this.lastBackPress = new Date().getTime();
                    }
                }
            });
        });
    }

}
