import { Request, Response, NextFunction } from 'express';
import { UpdateGuestRequest } from '@/types/apiRequests';

export function useTypeGuard() {
  // Checks if updateGuestInfo is called with correct type data
  function isValidUpdateGuestRequest(data: UpdateGuestRequest) {
    return (
      typeof data.name === 'string' &&
      typeof data.willAttend === 'boolean' &&
      (data.dietaryRestrictions === undefined ||
        (Array.isArray(data.dietaryRestrictions) &&
          data.dietaryRestrictions.every(
            (d: string) => typeof d === 'string',
          ))) &&
      (data.music === undefined ||
        (Array.isArray(data.music) &&
          data.music.every((music: string) => typeof music === 'string')))
    );
  }

  return {
    isValidUpdateGuestRequest,
  };
}
