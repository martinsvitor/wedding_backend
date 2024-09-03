import { UpdateGuestRequest } from '@/types/apiRquests';
import { useTypeGuard } from '@/utils/requestValidation';

describe('isValidUpdateGuestRequest', () => {
  const { isValidUpdateGuestRequest } = useTypeGuard();

  it('should return true for a request with music and dietaryRestrictions as undefined', () => {
    const testRequest: UpdateGuestRequest = {
      name: 'John Doe',
      willAttend: true,
    };

    expect(isValidUpdateGuestRequest(testRequest)).toBe(true);
  });

  it('should return true for a request with music as undefined', () => {
    const testRequest: UpdateGuestRequest = {
      name: 'John Doe',
      willAttend: false,
      dietaryRestrictions: ['vegan', 'gluten-free', 'lactose-free'],
    };

    expect(isValidUpdateGuestRequest(testRequest)).toBe(true);
  });

  it('should return true for a request with all fields', () => {
    const testRequest: UpdateGuestRequest = {
      name: 'John Doe',
      willAttend: true,
      music: ['Aquela da Sia com coro de criancas'],
      dietaryRestrictions: ['vegan', 'gluten-free', 'lactose-free'],
    };

    expect(isValidUpdateGuestRequest(testRequest)).toBe(true);
  });

  it('should return false for a request where willAtend is undefined', () => {
    const testRequest: any = {
      name: 'John Doe',
      willAttend: undefined,
      dietaryRestrictions: ['food as a general'],
    };

    expect(isValidUpdateGuestRequest(testRequest)).toBe(false);
  });

  it('should return false for a request where music is a string', () => {
    const testRequest: any = {
      name: 'John Doe',
      willAttend: undefined,
      music: "Todas do 'E o Tchan'",
    };

    expect(isValidUpdateGuestRequest(testRequest)).toBe(false);
  });

  it('should return false for a request where dietaryRestriction is a string', () => {
    const testRequest: any = {
      name: 'John Doe',
      willAttend: undefined,
      dietaryRestrictions: 'vegetables',
    };

    expect(isValidUpdateGuestRequest(testRequest)).toBe(false);
  });
});
