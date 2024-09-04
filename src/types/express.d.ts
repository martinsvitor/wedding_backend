import { Guest } from './guest';

declare global {
  namespace Express {
    interface Request {
      guest?: Guest;
    }
  }
}
