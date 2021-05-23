import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store'
import { records } from 'src/app/data';
import { Record } from 'src/app/types/Record';
import { RecordsActions } from './records.actions';

export interface State {
	records: Array<Record>
}

const initialState: State = {
	records: records
}

const recordsReducer = createReducer(
	initialState,
	on(RecordsActions.deleteRecord, (state, { id }) => ({
		...state,
		records: state.records.filter(r => r.id !== id)
	})),
	on(RecordsActions.addRecord, (state, { record }) => ({
		...state,
		records: [...state.records, record]
	})),
	on(RecordsActions.editRecord, (state, { record }) => ({
		...state,
		records: state.records.map((r) => record.id === r.id ? record : r)
	}))

)

export function reducer(state: State | undefined, action: Action) {
	return recordsReducer(state, action)
}