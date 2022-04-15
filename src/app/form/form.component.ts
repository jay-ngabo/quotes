import { Quote } from '@angular/compiler';
import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { Quotes } from './../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public newQuote : Quotes = new Quotes(0,'','',0, 0, '');
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0,'', '', 0, 0, '')
      }
  constructor() { }

  ngOnInit(): void {
  }

}
