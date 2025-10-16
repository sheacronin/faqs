import { Component, inject } from '@angular/core';
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
  faq: Faq | undefined;
  isEditing: boolean = false;

  constructor() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.faq = this.faqService.getFaq(Number(id));
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }
}
