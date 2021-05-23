import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/types/Record';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() record: any

	constructor() { }

	ngOnInit(): void {
	}

}
