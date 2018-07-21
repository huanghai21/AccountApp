import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';

import { ExpenditureFormComponent } from './components/expenditure-form/expenditure-form.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { BasicHttpService } from './service/basic-http.service';
import { MyEchartsComponent } from './components/my-echarts/my-echarts.component';

const EXPORTS = [
	OrderFormComponent,
	ExpenditureFormComponent,
	MyEchartsComponent
]
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		BsDatepickerModule.forRoot(),
		NgxEchartsModule
	],
	declarations: [ExpenditureFormComponent, OrderFormComponent, MyEchartsComponent],
	exports: EXPORTS,
	providers: [BasicHttpService],
	entryComponents: []
})
export class BasicModule {
	public static forRoot() {
		return { ngModule: BasicModule, providers: [] };
	}
}
