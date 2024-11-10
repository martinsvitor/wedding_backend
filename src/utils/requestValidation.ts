import { Request, Response, NextFunction } from 'express';
import { UpdateGuestRequest } from '@/types/apiRequests';
import { isBooleanObject } from 'util/types';

export function useTypeGuard() {
  // Checks if updateGuestInfo is called with correct type data
  function isValidUpdateGuestRequest(data: UpdateGuestRequest) {
    if (data.willAttend) {
      return isBooleanObject(data.willAttend);
    }
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

  function validateEventData(data: Partial<UpdateGuestRequest>): boolean {
    if (data.willAttend !== undefined && typeof data.willAttend !== 'boolean') {
      return false;
    }
    if (data.dietaryRestrictions !== undefined) {
      if (
        !Array.isArray(data.dietaryRestrictions) ||
        !data.dietaryRestrictions.every((food) => typeof food === 'string')
      ) {
        return false;
      }
    }
    if (data.music !== undefined) {
      if (
        !Array.isArray(data.music) ||
        !data.music.every((music) => typeof music === 'string')
      ) {
        return false;
      }
    }
    return true;
  }
  return {
    isValidUpdateGuestRequest,
    validateEventData,
  };
}
