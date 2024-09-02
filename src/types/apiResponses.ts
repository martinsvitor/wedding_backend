import { Guest } from './guest';

export interface ConfirmedGuestsResponse {
  confirmedGuests: Guest[];
}
export interface InvitedGuestsResponse {
  invitedGuests: Guest[];
}

export interface SongsResponse {
  songs?: string[];
}

export interface DietaryRestrictionsResponse {
  dietaryRestrictions?: string[];
}
