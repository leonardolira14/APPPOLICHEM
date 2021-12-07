import {Component, OnInit} from '@angular/core';
import {AlertProvider, ToastProvider} from '../../shared/providers';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

    constructor(private toastProvider: ToastProvider,
                private alertProvider: AlertProvider) {
    }

    ngOnInit() {
    }

    async onDefault() {
        await this.alertProvider.present('  Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    }

    async onPromise() {
        await this.alertProvider.presentOk('  Are you sure?').then(r => {
            this.toastProvider.show('you click ok');
        });
    }

    async onConfirm() {
        await this.alertProvider.confirm('  Are you sure?');
    }


}
