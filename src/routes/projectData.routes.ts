import Express from 'express';
import {
  getAllProjectData,
  createProjectData,
  updateProjectData,
  deleteProjectData,
} from '../controllers/projectData.controller';

const router = Express.Router();

router.get('/', getAllProjectData);
router.post('/', createProjectData);
router.patch('/:id', updateProjectData);
router.delete('/:id', deleteProjectData);

export default router;
