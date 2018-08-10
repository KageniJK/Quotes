import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quoted = [
    new Quotes (1, 'Our greatest glory is not in never falling, but in rising every time we fall. ', 'Confusious'),
    new Quotes (2, 'All our dreams can come true, if we have the courage to pursue them.', 'Walt Disney'),
    new Quotes (3, 'It does not matter how slowly you go as long as you do not stop.', 'Confusious'),
    new Quotes (4, 'Everything you’ve ever wanted is on the other side of fear. ', 'Georgeaddair '),
    new Quotes (5, 'Success is not final, failure is not fatal: it is the courage to continue that counts.', 'Winston Churchill'),
    new Quotes (6, 'Hardships often prepare ordinary people for an extraordinary destiny.', 'C.S Lewis'),
  ];

  addNewQuotes (quote) {
    const quoteLength = this.quoted.length;
    quote.id = quoteLength + 1;
    this.quoted.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
