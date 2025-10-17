import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from './faq.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Faqs {
  private url = 'http://localhost:3000/faqs';
  private http = inject(HttpClient);

  getAllFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(this.url);
  }

  getFaq(id: number): Observable<Faq> {
    return this.http.get<Faq[]>(`${this.url}?id=${id}`).pipe(map((faqs: Faq[]) => faqs[0]));
  }

  async updateFaq(faq: Faq) {
    console.log('updating...', faq);
  }
}
