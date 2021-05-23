import { RecordsActions } from 'src/app/store/records.actions';
import { RecordsSelectors } from 'src/app/store/records.selectors';
import { Record } from './../../types/Record';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { Store } from '@ngrx/store';


@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	records: Record[] = []
	title: string = '';
	content: string = '';
	isModalShown: boolean = false;
	subscription: Subscription


	constructor(private modalService: ModalService, private store: Store) {
		this.subscription = this.modalService.onToggle().subscribe((value) => (this.isModalShown = value))
		this.store.select(RecordsSelectors.records).subscribe(records => this.records = records)
	}

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.subscription.unsubscribe()
	}

	closeModal() {
		this.modalService.closeModal()
		this.title = ''
		this.content = ''
	}

	addRecord() {
		if (!this.title) {
			alert('Please add a title')
			return
		}
		const record: Record = {
			id: Date.now(),
			title: this.title,
			content: this.content
		}
		this.store.dispatch(RecordsActions.addRecord({ record }))
		this.closeModal()
	}

}
