import { Component, inject, signal } from '@angular/core';
import { FaqItem } from './faq-item/faq-item';
import { Faqs } from '../faqs.service';
import type { Faq } from '../faq.interface';
import { Modal } from '../modal/modal';
import { FaqForm } from '../faq-form/faq-form';

@Component({
  selector: 'app-faqs-list',
  imports: [FaqItem, Modal, FaqForm],
  templateUrl: './faqs-list.html',
  styleUrl: './faqs-list.css',
})
export class FaqsList {
  private faqService = inject(Faqs);
  faqItems = signal<Faq[]>([]);
  isAdding = signal<Boolean>(false);

  constructor() {
    this.faqService.getAllFaqs().then((faqs) => {
      this.faqItems.set(faqs);
    });
  }

  toggleIsAdding() {
    this.isAdding.update((val) => !val);
  }

  handleAdd(faq: Omit<Faq, 'id'>) {
    this.faqService.createFaq(faq).then((newFaq) => {
      this.faqItems.update((items) => [...items, newFaq]);
    });
    this.toggleIsAdding();
  }
}
