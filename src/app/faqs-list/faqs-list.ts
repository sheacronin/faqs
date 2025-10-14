import { Component, inject } from '@angular/core';
import { FaqItem } from '../faq-item/faq-item';
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
  faqItems: Faq[];

  constructor() {
    this.faqItems = this.faqService.getAllFaqs();
  }
}
