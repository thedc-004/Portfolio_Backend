import { Response, Request } from 'express';
import { UserModel } from '../models/userData.models';

export async function postData(req: Request, res: Response) {
  try {
    const data = await UserModel.create(req.body);
    res.status(201).json({ data });
  } catch (error) {
    res.json({ error }).status(500);
  }
}
