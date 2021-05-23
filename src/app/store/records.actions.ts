import { Record } from 'src/app/types/Record';
import { createAction, props } from '@ngrx/store'

export namespace RecordsActions {

	export const deleteRecord = createAction("DELETE_RECORD",
		props<{ id: number | undefined }>()
	)

	export const addRecord = createAction(
		"ADD_RECORD",
		props<{ record: Record }>()
	)

	export const editRecord = createAction(
		'EDIT_RECORD',
		props<{ record: Record }>()
	)

}
