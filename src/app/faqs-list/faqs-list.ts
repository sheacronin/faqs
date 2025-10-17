import { Component, inject } from '@angular/core';
import { FaqItem } from './faq-item/faq-item';
import { Faqs } from '../faqs.service';
import { Faq } from '../faq.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-faqs-list',
  imports: [FaqItem, AsyncPipe],
  templateUrl: './faqs-list.html',
  styleUrl: './faqs-list.css',
})
export class FaqsList {
  private faqService = inject(Faqs);
  faqItems$: Observable<Faq[]>;

  constructor() {
    this.faqItems$ = this.faqService.getAllFaqs();
  }
}
