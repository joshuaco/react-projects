import { z } from 'zod';
import { cardSchema } from './schemas';

export type Card = z.infer<typeof cardSchema>;
