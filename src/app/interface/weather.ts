import { TimeZone } from './time-zone';
import { GeoPosition } from './geo-position';

import { Temperature } from './temperature';
import { Country } from './country';
export interface Weather {

  key: string;
  LocalizedName: string;
  Country: Country;
  WeatherText: string;
  Temperature: Temperature;
  icon: string;
  LocalObservationDateTime: string;
  GeoPosition: GeoPosition;
  TimeZone: TimeZone;
}
