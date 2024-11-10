import { Guest } from './guest';

export type ManyGuestsResponse = Guest[];

export interface InvitedGuestsResponse {
  invitedGuests: Guest[];
}

export interface SongsResponse {
  songs?: string[];
}

export interface DietaryRestrictionsResponse {
  dietaryRestrictions?: string[];
}
