import { PremiumDetails } from './premium-details';


export interface EmailRequest {
  email: string;
  details: PremiumDetails;
}