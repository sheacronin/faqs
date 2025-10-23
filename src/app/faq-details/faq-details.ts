import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Faqs } from '../faqs.service';
import { Faq } from '../faq.interface';
import { FaqForm } from '../faq-form/faq-form';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-faq-details',
  imports: [RouterLink, FaqForm, Modal],
  templateUrl: './faq-details.html',
  styleUrl: './faq-details.css',
})
export class FaqDetails {
  private faqService = inject(Faqs);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  faq = signal<Faq>({} as Faq);
  isEditing = signal<boolean>(false);
  isDeleting = signal<boolean>(false);

  constructor() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.faqService.getFaq(Number(id)).then((faq) => {
      this.faq.set(faq);
    });
  }

  toggleEditing() {
    this.isEditing.update((val) => !val);
  }

  handleEdit(updatedFaq: Omit<Faq, 'id'>) {
    this.faqService.updateFaq({ id: this.faq().id, ...updatedFaq }).then((newFaq) => {
      this.faq.set(newFaq);
    });
    this.toggleEditing();
  }

  handleDelete() {
    this.faqService.deleteFaq(this.faq().id).then(() => {
      this.router.navigate(['/']);
    });
  }

  startDeleting() {
    this.isDeleting.set(true);
  }

  cancelDeleting() {
    this.isDeleting.set(false);
  }
}
