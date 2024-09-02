export interface UpdateGuestRequest {
  name: string;
  willAttend: boolean;
  dietaryRestrictions?: string[];
  music?: string[];
}
