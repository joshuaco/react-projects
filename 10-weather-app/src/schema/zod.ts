import { z } from 'zod';

export const Schema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number()
  }),
  sys: z.object({
    country: z.string()
  }),
  weather: z.array(
    z.object({
      description: z.string(),
      main: z.string()
    })
  )
});

export type Weather = z.infer<typeof Schema>;
