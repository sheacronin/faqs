import { Routes } from '@angular/router';
import { FaqsList } from './faqs-list/faqs-list';
import { FaqDetails } from './faq-details/faq-details';

export const routes: Routes = [
  {
    path: '',
    component: FaqsList,
    title: 'FAQs',
  },
  {
    path: 'faqs/:id',
    component: FaqDetails,
  },
];
