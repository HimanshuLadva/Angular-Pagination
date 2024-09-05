import { Component } from '@angular/core';
import { CherectersService } from './cherecters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagination';
  chars:any[] =[];
  p:number = 1;
  total:number = 0;
  loading = true;

  constructor(private cherecters: CherectersService) {}
  ngOnInit() {
    this.getChars();
  }

  getChars() {
    this.cherecters.getCherecters(this.p).subscribe((response: any) => {
      response.results.forEach(
        (ele: any) => ele.url = Number(ele.url.match(/\d+/g).join(''))
      );
      this.chars = response.results;
      this.loading = false;
      this.total = response.count;
    })
  }

  pageChangeEvent(event:number) {
    // this.loading = true;
    this.p = event;
    this.getChars();
  }
}
