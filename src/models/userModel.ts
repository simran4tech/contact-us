import { User } from '../interfaces/user';

export class userModel implements User {
    constructor(
        public email: string,
        public password: string,
        public isAdmin: boolean
    ) {}
}
