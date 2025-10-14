import { Routes } from '@angular/router';
import { FaqsList } from './faqs-list/faqs-list';

export const routes: Routes = [
  {
    path: '',
    component: FaqsList,
    title: 'FAQs',
  },
];
