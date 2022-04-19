import { Quotes } from './../quotes';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from 'console';
import { first, last } from 'rxjs';

import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
// first!: Number;
// last!: number;
// count!: Number;
// highest(){
//   this.first = 0
//   this.last = 0
//   for (this.count = 0; this.count < this.Quotes.length; this.count++){
//     this.last = this.Quotes[this.count].upvote;
//     if(this.last> this.first){this.first = this.last}
//   }
//   return this.first

});
