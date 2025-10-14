import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsList } from './faqs-list';

describe('FaqsList', () => {
  let component: FaqsList;
  let fixture: ComponentFixture<FaqsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
