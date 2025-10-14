import { Component } from '@angular/core';
import { FaqItem } from '../faq-item/faq-item';

@Component({
  selector: 'app-faqs-list',
  imports: [FaqItem],
  templateUrl: './faqs-list.html',
  styleUrl: './faqs-list.css',
})
export class FaqsList {
  faqItems = [
    { id: 1, title: 'Creating an account?', body: 'Lorem ipsum' },
    { id: 2, title: 'Trouble logging in?', body: 'Lorem ipsum' },
    { id: 3, title: 'Billing status?', body: 'Lorem ipsum' },
  ];
}
