import { Component, OnInit,Input } from '@angular/core';
interface Quote {
  quote: string;
  author: string;
}
@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent {
  @Input() author!: string;
  @Input() quote!: string;
  @Input() tweetURL!: string;
  @Input() getNewQuote!: () => void;

  constructor() {}
}