import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuoteService } from '../../services/quote.service';
import { QuoteRequest } from '../../models/quote-request';
import { PremiumDetails } from '../../models/premium-details';
import { ContactAgentModalComponent } from '../contact-agent-modal/contact-agent-modal.component';

@Component({
  selector: 'app-quote-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ContactAgentModalComponent],
  templateUrl: './quote-calculator.component.html',
  styleUrl: './quote-calculator.component.css'
})
export class QuoteCalculatorComponent {
  quoteForm: FormGroup;
  quoteDetails?: PremiumDetails;
  error = '';
  showContactModal = false;

  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteService
  ) {
    this.quoteForm = this.fb.group({
      age: [18, [Validators.required, Validators.min(16), Validators.max(120)]],
      years: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      accidents: [false]
    });
  }

  calculateQuote(): void {
    if (this.quoteForm.valid) {
      this.quoteService.calculateQuote(this.quoteForm.value)
        .subscribe({
          next: (details: PremiumDetails) => {
            this.quoteDetails = details;
            this.error = '';
          },
          error: (err: Error) => {
            this.error = 'Failed to calculate quote. Please try again.';
            console.error(err);
          }
        });
    }
  }

  openContactModal() {
    this.showContactModal = true;
  }

  closeContactModal() {
    this.showContactModal = false;
  }
}