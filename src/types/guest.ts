export interface Guest {
  id: number;
  name: string;
  willAttend: boolean | null;
  dietaryRestrictions: string[] | undefined;
  songs: string[] | undefined;
}
