import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1, ' You only live once','Author-nelson mandela', 0, 0, ''),
    new Quotes(2,'Trust your cRazy ideas','Author-jay',0,0,''),
    new Quotes(3,'Imagunation is more important than knowledge','Author-jay',0, 0, ''),
    new Quotes(4,'You can pay for school but you cant buy class','Author-jay-z',0, 0, ''),
    new Quotes(5,'Who needs a hero? you need a hero, look in the mirror, there goes your hero','Author-Kendrick lamar',0, 0, ''),
    new Quotes(6,'No such thing as a life better than yours. LOVE YOURS','Author-j-cole',0, 0, ''),
  ];

  addNewQuote(quote: Quotes){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
   
    this.quotes.push(quote)
  }
  toggleDetails(index:string|number){
    //@ts-ignore
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm('are you sure you want to delete this quote?')
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
