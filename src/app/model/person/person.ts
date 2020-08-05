import {Institution} from '../institution/institution'

export class Person {
    id: string;
    name: string;
    email: String;
    phone: string;
    institution: Institution;
    wantToReceiveMail: boolean;
}
