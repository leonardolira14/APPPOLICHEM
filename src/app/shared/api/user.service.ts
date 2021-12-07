import {Injectable} from '@angular/core';
import {UserModel} from '../model';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor() {
    }

    getList(): Array<UserModel> {
        return [
            {
                name: 'Morgan Johnson',
                shortName: 'Morgan',
                img: 'assets/images/avatar/1.jpg',
                title: 'Morgan Johnson',
                date: '21 August 2022 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Marlon Horatio',
                shortName: 'Marlon',
                img: 'assets/images/avatar/2.jpg',
                title: 'Marlon Horatio',
                date: '20 August 2021 at 9:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Noel Gladstone',
                shortName: 'Noel',
                img: 'assets/images/avatar/3.jpg',
                title: 'Noel Gladstone',
                date: '12 August 2021 at 12:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Grover Oscar',
                shortName: 'Grover',
                img: 'assets/images/avatar/4.jpg',
                title: 'Grover Oscar',
                date: '12 August 2021 at 7:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Sherry Dunbar',
                shortName: 'Grover',
                img: 'assets/images/avatar/5.jpg',
                title: 'Sherry Dunbar',
                date: '11 August 2021 at 6:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'George Herty',
                shortName: 'George',
                img: 'assets/images/avatar/6.jpg',
                title: 'George Herty',
                date: '11 August 2021 at 5:21pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Channing Wheeler',
                shortName: 'Channing',
                img: 'assets/images/avatar/7.jpg',
                title: 'Channing Wheeler',
                date: '10 August 2021 at 3:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Sara Symons',
                shortName: 'Sara',
                img: 'assets/images/avatar/8.jpg',
                title: 'Sara Symons',
                date: '11 August 2021 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Zona Carroll',
                shortName: 'Zona',
                img: 'assets/images/avatar/9.jpg',
                title: 'Zona Carroll',
                date: '12 August 2021 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Tracy Cromwell',
                shortName: 'Tracy',
                img: 'assets/images/avatar/10.jpg',
                title: 'Tracy Cromwell',
                date: '15 August 2021 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Zenobia Bryan',
                shortName: 'Zenobia',
                img: 'assets/images/avatar/11.jpg',
                title: 'Zenobia Bryan',
                date: '16 August 2021 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Mary Hoover',
                shortName: 'Mary',
                img: 'assets/images/avatar/12.jpg',
                title: 'Mary Hoover',
                date: '17 August 2021 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Queena Clement',
                shortName: 'Queena',
                img: 'assets/images/avatar/13.jpg',
                title: 'Erica Romaguera',
                date: '18 August 2021 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Vanessa Tennyson',
                shortName: 'Vanessa',
                img: 'assets/images/avatar/14.jpg',
                title: 'Vanessa Tennyson',
                date: '19 August 2021 at 8:19pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Shirley Rhodes',
                shortName: 'Shirley',
                img: 'assets/images/avatar/15.jpg',
                title: 'Shirley Rhodes',
                date: '20 August 2021 at 8:12pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'April Ben',
                shortName: 'April',
                img: 'assets/images/avatar/16.jpg',
                title: 'meeting',
                date: '11 August 2021 at 8:11pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                name: 'Trista Dorothea',
                shortName: 'Trista',
                img: 'assets/images/avatar/17.jpg',
                title: 'Trista Dorothea',
                date: '11 August 2021 at 3:11pm',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ].sort(() => Math.random() - 0.5).slice(0, 10);
    }
}
