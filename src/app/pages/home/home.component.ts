import { Record } from './../../types/Record';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Store } from '@ngrx/store';
import { RecordsSelectors } from '../../store/records.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	records: Record[] = []
	constructor(private modalService: ModalService, private store: Store) {
		this.store.select(RecordsSelectors.records).subscribe(records => this.records = records)
	}

	ngOnInit(): void {
	}

	showModal() {
		this.modalService.showModal()
	}

}
