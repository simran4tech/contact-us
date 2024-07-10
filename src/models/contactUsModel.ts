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
import mongoose, { Schema } from 'mongoose';

import { contactUs } from '../interfaces/contactUs';

export class contactUsModel implements contactUs {
    constructor(
        public name: string,
        public email: string,
        public mobile: number,
        public subject: string,
        public description: string
    ) {}
}
const ContactUsSchema: Schema = new Schema({
  name: { 
      type: String,
      required: true },

  email: {
       type: String,
       required: true },

  phone: { 
      type: number, 
      required: true },  //why error??

  subject: { 
      type: String, 
      required: true },

  description: { 
      type: String, 
      required: true 
  }
});

export default mongoose.model<contactUsModel>('contactUs', ContactUsSchema);


