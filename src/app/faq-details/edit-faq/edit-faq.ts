import { Component, input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Faqs } from '../../faqs.service';
import type { Faq } from '../../faq.interface';

@Component({
  selector: 'app-edit-faq',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-faq.html',
  styleUrl: './edit-faq.css',
})
export class EditFaq {
  private faqService = inject(Faqs);
  faq = input.required<Faq>();
  editForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  submitEdit() {
    console.log('submitted!');
    this.faqService.updateFaq({
      id: this.faq().id,
      title: this.editForm.value.title ?? '',
      body: this.editForm.value.body ?? '',
    });
  }
}
