"use strict";
// Example ContactFormModel interacting with MongoDB
/*import { Db, Collection } from 'mongodb';
import { contactUs } from '../interfaces/contactUs';
import { getDatabase } from '../config/db';

const COLLECTION_NAME = 'contact_forms';

export class ContactFormModel {
  private db: Db;
  private collection: Collection<contactUs>;

  constructor() {
    this.db = getDatabase();
    this.collection = this.db.collection(COLLECTION_NAME);
  }

  async create(form: contactUs): Promise<void> {
    await this.collection.insertOne(form);
    console.log('Form added to MongoDB:', form);
  }

  async getAll(): Promise<contactUs[]> {
    const forms = await this.collection.find().toArray();
    return forms;
  }
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUsModel = void 0;
class contactUsModel {
    constructor(name, email, mobile, subject, description) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.subject = subject;
        this.description = description;
    }
}
exports.contactUsModel = contactUsModel;
