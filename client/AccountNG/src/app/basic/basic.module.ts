import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { IncomeFormComponent } from './components/income-form/income-form.component';
import { ExpenditureFormComponent } from './components/expenditure-form/expenditure-form.component';

const EXPORTS = [
	IncomeFormComponent,
	ExpenditureFormComponent
]
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		BrowserAnimationsModule,
		BsDatepickerModule.forRoot()
	],
	declarations: [IncomeFormComponent, ExpenditureFormComponent],
	exports: EXPORTS,
	providers: [],
	entryComponents: []
})
export class BasicModule {
	public static forRoot() {
		return { ngModule: BasicModule, providers: [] };
	}
}
