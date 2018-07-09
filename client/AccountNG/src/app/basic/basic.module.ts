import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

import { ExpenditureFormComponent } from './components/expenditure-form/expenditure-form.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

const EXPORTS = [
	OrderFormComponent,
	ExpenditureFormComponent
]
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		BsDatepickerModule.forRoot()
	],
	declarations: [ExpenditureFormComponent, OrderFormComponent],
	exports: EXPORTS,
	providers: [],
	entryComponents: []
})
export class BasicModule {
	public static forRoot() {
		return { ngModule: BasicModule, providers: [] };
	}
}
