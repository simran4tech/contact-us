"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
class userModel {
    constructor(email, password, isAdmin) {
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
exports.userModel = userModel;
