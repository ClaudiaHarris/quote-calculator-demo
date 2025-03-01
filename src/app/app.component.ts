import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { QuoteCalculatorComponent } from './components/quote-calculator/quote-calculator.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuoteCalculatorComponent],
  template: '<app-quote-calculator></app-quote-calculator>'
})
export class AppComponent { }