import {Component, OnInit} from '@angular/core';
import {LoadingProvider} from '../../../shared/providers';
import {timer} from 'rxjs';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.page.html',
    styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

    constructor(private loadProvider: LoadingProvider) {
    }

    ngOnInit() {
    }

    async onDefault() {
        const loader = await this.loadProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then();
        });
    }

    async onShowName(name) {
        const loader = await this.loadProvider.create(name);
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then();
        });
    }

    async onCustom() {
        const loader = await this.loadProvider.create1();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then();
        });
    }


}
