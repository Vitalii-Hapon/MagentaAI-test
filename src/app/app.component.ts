import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {CampaignService} from './core/campaign.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'test-app';
  public campaigns$: Observable<any[]> | undefined;
  public id = '';
  public filter = new FormControl('');
  public filterState = false;
  private ngUnsubscribe = new Subject();

  constructor(private campaignService: CampaignService) {

  }

  public selectCampaign(event: any): any {
    this.id = event.getAttribute('data-click');
    this.campaigns$ = this.campaignService
      .getCampaign(this.id);
    document.cookie = this.id;
  }

  public ngOnInit(): any {
    if (document.cookie) {
      this.campaigns$ = this.campaignService
        .getCampaign(document.cookie);
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
