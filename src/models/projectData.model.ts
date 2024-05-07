import { Document, Schema, model } from 'mongoose';

interface projectData extends Document {
  imgSrc: string;
  name: string;
  description: string;
  link: string;
}

const projectSchema = new Schema({
  imgSrc: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
});

export const projectModel = model<projectData>('projectData', projectSchema);
