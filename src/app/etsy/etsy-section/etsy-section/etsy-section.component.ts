import { Component, OnInit, Input } from '@angular/core';
import { EtsySection } from "app/etsy/section";
import { Observable } from "rxjs/Observable";
import { EtsyListing } from "app/etsy/listing";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { etsy, content } from "app/redux/selectors";
import { EtsyState } from "app/redux/reducers/etsy.reducer";
import { EtsyActions } from "app/redux/actions/etsy.actions";


@Component({
  selector: 'app-etsy-section',
  templateUrl: './etsy-section.component.html',
  styleUrls: ['./etsy-section.component.css']
})
export class EtsySectionComponent implements OnInit {
  @Input() section: EtsySection;
  listingsHash$: Observable<EtsyState>;
  currentLanguage$ : Observable<string>;
    
  constructor( 
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    
    this.selectFromStore();
  }

  selectFromStore() {
    this.listingsHash$ = this.store.select<EtsyState>(etsy.listingsHash);
    this.currentLanguage$  = this.store.select<string>(content.currentLanguage);
  }

  showMore() {
    this.store.dispatch(EtsyActions.showMore(this.section));
  }
}
