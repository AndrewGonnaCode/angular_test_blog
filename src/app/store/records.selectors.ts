import { createFeatureSelector, createSelector } from '@ngrx/store'
import { State } from './records.reducer'

export namespace RecordsSelectors {
	export const state = createFeatureSelector<State>('records')

	export const records = createSelector(state, (state) => state.records)
}