import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fromReducer from './store/records.reducer';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { RecordComponent } from './pages/record/record.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';



const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'records/:id', component: RecordComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CardComponent,
		RecordComponent,
		ModalComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true }),
		StoreModule.forRoot({ records: fromReducer.reducer })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
