import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-list-checkbox',
    templateUrl: './list-checkbox.page.html',
    styleUrls: ['./list-checkbox.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListCheckboxPage implements OnInit {
    list = [
        {
            title: 'Apple iPhone X', active: false, child: [
                {title: 'Price', isChecked: false},
                {title: 'Color', isChecked: false},
                {title: 'Models', isChecked: false},
                {title: 'GPS', isChecked: false}
            ]
        },
        {
            title: 'Huawei Mate 30 Pro', active: false, child: [
                {title: 'RAM', isChecked: false},
                {title: 'Camera', isChecked: false},
                {title: 'Portrait', isChecked: false},
                {title: 'NFC', isChecked: false}]
        },
        {
            title: 'iPhone 8 Plus', active: false, child: [
                {title: 'Bluetooth', isChecked: false},
                {title: 'Touch ID', isChecked: false},
                {title: 'OS', isChecked: false},
                {title: 'NFC', isChecked: false}]
        },
        {
            title: 'Galaxy S11', active: false, child: [
                {title: 'Camera', isChecked: false},
                {title: 'Touch ID', isChecked: false},
                {title: 'Price', isChecked: false},
                {title: 'Color', isChecked: false}]
        },
        {
            title: 'iPhone 7 Plus', active: false, child: [
                {title: 'Capacity', isChecked: false},
                {title: 'Weight', isChecked: false},
                {title: 'NFC', isChecked: false},
                {title: 'Color', isChecked: false}]
        },
        {
            title: 'Galaxy S10', active: false, child: [
                {title: 'Size', isChecked: false},
                {title: 'Display', isChecked: false},
                {title: 'NFC', isChecked: false},
                {title: 'Portrait Mode', isChecked: false}]
        },
        {
            title: 'iPhone 11', active: false, child: [
                {title: 'Chip', isChecked: false},
                {title: 'Camera', isChecked: false},
                {title: 'NFC', isChecked: false},
                {title: 'OS', isChecked: false}]
        },
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    toggle(item) {
        item.active = !item.active;
    }

    onChoose() {
        let list = this.list.reduce((p, c, i) => {
            p.push(...c.child);
            return p;
        }, []);
        list = list.filter(s => s.isChecked).map(c => c.title);
        this.toastProvider.show(JSON.stringify(list));
    }

}
