import { projectModel } from '@/models/projectData.model';
import { Response, Request } from 'express';

export async function getAllProjectData(req: Request, res: Response) {
  try {
    const data = await projectModel.find({});
    return res.status(201).json({ data });
  } catch (error) {
    return res.json({ error }).status(500);
  }
}

export async function createProjectData(req: Request, res: Response) {
  try {
    const data = await projectModel.create(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.json({ error }).status(500);
  }
}

export async function updateProjectData(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = await projectModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.send({ error: 'No project found' });
    }
    return res.status(201).json({ data });
  } catch (error) {
    return res.json({ error }).status(500);
  }
}

export async function deleteProjectData(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = await projectModel.findOneAndDelete({ _id: id });
    if (!data) {
      return res.send({ error: 'No project found' });
    }
    return res.status(201).json({ data });
  } catch (error) {
    return res.json({ error }).status(500);
  }
}
