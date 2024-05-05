import { object, string, number, array, Output, parse } from 'valibot';

const Schema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number()
  }),
  sys: object({
    country: string()
  }),
  weather: array(
    object({
      description: string(),
      main: string()
    })
  )
});

export type Weather = Output<typeof Schema>;

export const parseData = (data: Weather) => parse(Schema, data);
