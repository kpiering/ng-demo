import { Action } from '@ngrx/store';
import { EtsyListing } from '../../etsy/listing';
import { EtsyActions, EtsyLoadCompletePayload } from "app/redux/actions/etsy.actions";

export type LoadStatus = 'empty' | 'loading' | 'loaded';

export interface EtsyState {
    loaded: LoadStatus;
    ids: number[];
    [id: number]: EtsyListing;
}

export const initial: EtsyState = {
    loaded: 'empty',
    ids: [],
};

export class EtsyReducer {
    static reduce(state: EtsyState = initial, action: Action): EtsyState {
        switch(action.type) {
            case EtsyActions.ETSY_LOAD_BEGIN:
                return {
                    ...state,
                    loaded: 'loading',
                };
            case EtsyActions.ETSY_LOAD_COMPLETE:
                const completePayload: EtsyLoadCompletePayload = <EtsyLoadCompletePayload>action.payload;
                const next: EtsyState =  {
                    ...state,
                    loaded: 'loaded',
                    ids: completePayload.listings.map((l: EtsyListing) => { return l.listing_id }),
                };
                completePayload.listings.map((l: EtsyListing) => { next[l.listing_id] = l; })
                return next;
            default:
                return state;
        } 
    }
}
