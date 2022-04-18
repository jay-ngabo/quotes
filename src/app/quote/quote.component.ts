import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1, ' You only live once','nelson mandela', 0, 0, ''),
    new Quotes(2,'Trust your cRazy ideas','jay',0,0,''),
    new Quotes(3,'Imagunation is more important than knowledge','jay',0, 0, ''),
    new Quotes(4,'You can pay for school but you cant buy class','jay-z',0, 0, ''),
    new Quotes(5,'Get new Phone Case','Kendrick lamar',0, 0, ''),
    new Quotes(6,'Get new Phone Case','author',0, 0, ''),
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
      let toDelete = confirm('are you sure you want to delete this quote by ${{this.qoute.[index]author}}')
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
