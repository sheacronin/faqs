import { Component, inject, signal } from '@angular/core';
import { FaqItem } from './faq-item/faq-item';
import { Faqs } from '../faqs.service';
import { Faq } from '../faq.interface';

@Component({
  selector: 'app-faqs-list',
  imports: [FaqItem],
  templateUrl: './faqs-list.html',
  styleUrl: './faqs-list.css',
})
export class FaqsList {
  private faqService = inject(Faqs);
  faqItems = signal<Faq[]>([]);

  constructor() {
    this.faqService.getAllFaqs().then((faqs) => {
      this.faqItems.set(faqs);
    });
  }
}
