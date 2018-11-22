import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  usr: any;
  data: any;
  accounts: any;
  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.usr = {};
    this.getCatalog();
    this.getMyAccounts();
  }

  getCatalog( ) {
    this.cardsService.getCards(this.usr).subscribe(
        data => {
        this.data = data;
        //console.log(data);
      }
    );
  }
  getMyAccounts() {
    this.cardsService.getAccounts(this.usr).subscribe(
        accounts => {
        this.accounts = accounts;
        //console.log(accounts);
      }
    );
  }

}
