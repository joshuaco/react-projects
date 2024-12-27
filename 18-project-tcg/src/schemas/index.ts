import { z } from 'zod';

export const cardSchema = z.object({
  id: z.string(),
  abilities: z
    .array(
      z.object({
        type: z.string(),
        name: z.string(),
        text: z.string()
      })
    )
    .optional(),
  attacks: z
    .array(
      z.object({
        cost: z.array(z.string()),
        damage: z.string(),
        name: z.string(),
        text: z.string(),
        convertedEnergyCost: z.number()
      })
    )
    .optional(),
  hp: z.string().optional(),
  images: z.object({
    small: z.string(),
    large: z.string()
  }),
  name: z.string(),
  number: z.string(),
  rarity: z.string().optional(),
  rules: z.array(z.string()).optional(),
  types: z.array(z.string()).optional(),
  weaknesses: z
    .array(z.object({ type: z.string(), value: z.string() }))
    .optional()
});

export const cardsSchema = z.array(cardSchema);
