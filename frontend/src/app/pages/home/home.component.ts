import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';


interface Quote {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  quote!: Quote;
  quoteList!: Quote[];
  tweetURL!: string;
  getNewQuote: () => void = (): void => {
    const idx = Math.floor(Math.random() * this.quoteList.length);
    const newQuote = this.quoteList[idx];
    this.quote = newQuote;
  };
  backgrounds: string[] = [
    'https://images.unsplash.com/photo-1434907652076-85f8401482c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920'
  ]

  loadingBGImage: boolean

  dateTime: Observable<Date>

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date()
      })
    )
    this.fetchAQuote();
  }
  

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab']
      if (!tab) return 'secondary'
      return tab
    }
  }
  logout(){
    this.authService.logout()
  }

  async changeBGImage() {
    this.loadingBGImage = true

    const result = await fetch('https://source.unsplash.com/random/1920x1080', {
      method: 'HEAD'
    })

    const alreadyGot = this.backgrounds.includes(result.url)
    if (alreadyGot) {
      // this is the same image as we currently have, so re-run the function
      return this.changeBGImage()
    }

    this.backgrounds.push(result.url)
  }

  onBGImageLoad(imgEvent: Event) {
    // BG image has loaded, now remove the old BG image from the backgrounds array
    const imgElement = imgEvent.target as HTMLImageElement
    const src = imgElement.src
    this.backgrounds = this.backgrounds.filter(b => b === src)

    this.loadingBGImage = false
  }

  
  async fetchAQuote(): Promise<void> {
    const quotesURL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = await fetch(quotesURL);
    const quotes = await response.json();
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    const newQuote = quotes.quotes[idx];
    this.quoteList = quotes.quotes;
    this.quote = newQuote;
    this.setTweetURL(newQuote);
    this.loading = false;
  }

  setTweetURL(quote: Quote): void {
    this.tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} --${quote.author}`;
  }

}
