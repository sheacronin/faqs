import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Faq } from '../faq.interface';

@Component({
  selector: 'app-faq-item',
  imports: [RouterLink],
  templateUrl: './faq-item.html',
  styleUrl: './faq-item.css',
})
export class FaqItem {
  faq = input.required<Faq>();
}
