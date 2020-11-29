import { ActivitiesLists } from './activities-list.model';
export interface ApiData {
  id?: string;
  date: string;
  totalHours: number;
  dayName: string;
  activities: ActivitiesLists[];
}
