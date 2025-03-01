import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-agent-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-agent-modal.component.html',
  styleUrl: './contact-agent-modal.component.css'
})
export class ContactAgentModalComponent {
  @Output() close = new EventEmitter<void>();
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]],
      email: ['', [Validators.email]],
      preferredContact: ['Phone']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact form submitted:', this.contactForm.value);
      this.close.emit();
    }
  }

  onClose() {
    this.close.emit();
  }
}
