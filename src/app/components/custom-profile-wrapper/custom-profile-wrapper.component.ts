import {ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {ScrollDetail} from '@ionic/core';
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'custom-profile-wrapper',
    templateUrl: './custom-profile-wrapper.component.html',
    styleUrls: ['./custom-profile-wrapper.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomProfileWrapperComponent {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isActive = false;
    img = 'assets/images/profile/18.jpg';

    constructor() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            console.log(scrollTop);
            this.isActive = scrollTop >= 300;
        }
    }
}
