import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { content } from "app/redux/selectors";
import { LoadStatus } from "app/redux/reducers/etsy.reducer";
import { Page } from "app/content/page";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page$: Observable<Page>;
  loaded$: Observable<LoadStatus>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.page$ = this.store.select<Page>(content.homePage);
    this.loaded$ = this.store.select<LoadStatus>(content.loadStatus);
  }

}
