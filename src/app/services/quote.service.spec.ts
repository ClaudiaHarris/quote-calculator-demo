import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { QuoteService } from './quote.service';
import { QuoteRequest } from '../models/quote-request';
import { PremiumDetails } from '../models/premium-details';

describe('QuoteService', () => {
  let service: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteService]
    });
    service = TestBed.inject(QuoteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should calculate quote', () => {
    const mockRequest: QuoteRequest = {
      age: 25,
      years: 5,
      accidents: false
    };

    const mockResponse: PremiumDetails = {
      basePremium: 1200,
      fullPaymentDiscount: 1140, // 5% off
      downPayment: 120, // 10%
      remainingBalance: 1080,
      monthlyPayment: 180 // remaining/6
    };

    service.calculateQuote(mockRequest).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/api/quotes/calculate');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
