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
  hp: z.string(),
  images: z.object({
    small: z.string(),
    large: z.string()
  }),
  name: z.string(),
  number: z.string(),
  rarity: z.string().optional(),
  types: z.array(z.string()),
  weaknesses: z
    .array(z.object({ type: z.string(), value: z.string() }))
    .optional()
});

export const cardsSchema = z.array(cardSchema);
