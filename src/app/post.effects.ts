import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EntityCacheDispatcher, ofEntityType, ofEntityOp, EntityOp } from '@ngrx/data';
import { tap } from 'rxjs/operators';
 
@Injectable()
export class PostEffects {
 
ngrxDataEffectForQueryLoad$ = createEffect(() =>
        this.actions$
            .pipe(
                ofEntityType("Post"),
                ofEntityOp([EntityOp.QUERY_ALL]),
                tap(action => {
                  console.log('%c%s','color: green; background: yellow; font-size: 24px;','Do your 🎸🎸🎸 WOW 😲😲😲 Effect here 🚀🚀🚀!')
                  })
            )
    );
 
  constructor(private actions$: Actions) {}
}