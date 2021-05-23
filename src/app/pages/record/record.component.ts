import { RecordsActions } from '../../store/records.actions';
import { RecordsSelectors } from '../../store/records.selectors';
import { Record } from 'src/app/types/Record';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, } from 'rxjs';



@Component({
	selector: 'app-record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
	id: number | undefined
	private subscription: Subscription;
	currentRecord: Record | undefined | null = null
	content: string | undefined
	title: string | undefined

	constructor(private activateRoute: ActivatedRoute, private store: Store) {
		this.subscription = activateRoute.params.subscribe(params => this.id = params['id'])
		this.store.select(RecordsSelectors.records).subscribe(records => this.currentRecord = this.id ? records.find((record) => record.id === Number(this.id)) : null)
	}

	titleChangeHandler(value: string) {
		this.title = value
	}

	contentChangeHandler(value: string) {
		this.content = value
	}

	ngOnInit(): void {
		this.title = this.currentRecord?.title
		this.content = this.currentRecord?.content

	}

	removeRecord() {
		let id = Number(this.id)
		const isDelete = confirm('Удалить?')
		if (isDelete) {
			this.store.dispatch(RecordsActions.deleteRecord({ id }))
		}
	}

	saveRecord() {
		const record: Record = {
			id: Number(this.id),
			title: this.title,
			content: this.content
		}
		this.store.dispatch(RecordsActions.editRecord({ record }))
	}

}
