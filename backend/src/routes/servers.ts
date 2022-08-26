import { Router } from 'express';
import { search, reload } from '../controllers/movies';

const router = Router();

router.get('/search', search);
router.post('/reload', reload);

export default router;
