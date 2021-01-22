import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() public campaign: any;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
