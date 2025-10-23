import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import type { Faq } from '../faq.interface';

@Component({
  selector: 'app-faq-form',
  imports: [ReactiveFormsModule],
  templateUrl: './faq-form.html',
  styleUrl: './faq-form.css',
})
export class FaqForm {
  faq = input<Faq>();
  faqForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });
  submitted = output<Omit<Faq, 'id'>>();

  submitFaq() {
    const title = this.faqForm.value.title ?? '';
    const body = this.faqForm.value.body ?? '';
    this.submitted.emit({ title, body });
  }
}
