import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	private isModalShown: boolean = false
	private subject = new Subject<any>()

	constructor() { }

	showModal(): void {
		this.isModalShown = true
		this.subject.next(this.isModalShown)
	}
	closeModal(): void {
		this.isModalShown = false
		this.subject.next(this.isModalShown)
	}
	onToggle(): Observable<any> {
		return this.subject.asObservable()
	}
}
