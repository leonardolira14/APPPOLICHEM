export class CardModel {
    public title: string;
    public content: string;
    public img: string;
}

export class CardModelLayout {
    public title: string;
    public subTitle: string;
    public price: number;
    public content: string;
    public img: string;
}

export class CardModelComment {
    public avatar: string;
    public name: string;
    public time: string;
    public img: string;
    public title: string;
    public content: string;
    public likes: number;
    public comments: number;
}

export class CardInfoModel {
    public avatar: string;
    public name: string;
    public date: string;
    public img: string;
    public title: string;
    public subTitle?: string;
    public price?: number;
    public content: string;
    public likes?: number;
    public comments?: number;
}
