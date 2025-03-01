import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuoteRequest } from '../models/quote-request';
import { PremiumDetails } from '../models/premium-details';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = '/api/quotes'; // Adjust URL as needed

  constructor(private http: HttpClient) {}

  calculateQuote(request: QuoteRequest): Observable<PremiumDetails> {
    return this.http.post<PremiumDetails>(`${this.apiUrl}/calculate`, request);
  }
}
