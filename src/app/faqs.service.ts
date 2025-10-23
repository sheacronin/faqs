import { Injectable } from '@angular/core';
import { Faq } from './faq.interface';

@Injectable({
  providedIn: 'root',
})
export class Faqs {
  private url = 'http://localhost:3000/faqs';

  async getAllFaqs(): Promise<Faq[]> {
    const res = await fetch(this.url);
    return await res.json();
  }

  async getFaq(id: number): Promise<Faq> {
    const res = await fetch(`${this.url}?id=${id}`);
    const data: Faq[] = await res.json();
    return data[0];
  }

  async updateFaq(faq: Faq) {
    console.log('updating...', faq);
  }

  async createFaq(faq: Omit<Faq, 'id'>) {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(faq),
    });
    return await res.json();
  }
}
