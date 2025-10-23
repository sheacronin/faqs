import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Faqs } from '../faqs.service';
import { Faq } from '../faq.interface';
import { EditFaq } from './edit-faq/edit-faq';

@Component({
  selector: 'app-faq-details',
  imports: [RouterLink, EditFaq],
  templateUrl: './faq-details.html',
  styleUrl: './faq-details.css',
})
export class FaqDetails {
  private faqService = inject(Faqs);
  private activatedRoute = inject(ActivatedRoute);
  faq = signal<Faq>({} as Faq);
  isEditing = signal<boolean>(false);

  constructor() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.faqService.getFaq(Number(id)).then((faq) => {
      this.faq.set(faq);
    });
  }

  toggleEditing() {
    this.isEditing.update((val) => !val);
  }
}
