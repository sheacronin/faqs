import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Faqs } from '../faqs.service';
import { Faq } from '../faq.interface';
import { EditFaq } from './edit-faq/edit-faq';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq-details',
  imports: [RouterLink, AsyncPipe, EditFaq],
  templateUrl: './faq-details.html',
  styleUrl: './faq-details.css',
})
export class FaqDetails {
  private faqService = inject(Faqs);
  private activatedRoute = inject(ActivatedRoute);
  faq$!: Observable<Faq>;
  isEditing: WritableSignal<boolean> = signal(false);

  constructor() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.faq$ = this.faqService.getFaq(Number(id));
  }

  toggleEditing() {
    this.isEditing.update((val) => !val);
  }
}
