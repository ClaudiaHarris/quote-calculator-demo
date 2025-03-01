import { Routes } from '@angular/router';
import { QuoteCalculatorComponent } from './components/quote-calculator/quote-calculator.component';

export const routes: Routes = [
  { path: '', component: QuoteCalculatorComponent },
  { path: '**', redirectTo: '' }
];
