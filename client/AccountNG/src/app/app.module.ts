import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		// BrowserAnimationsModule,
		// BsDatepickerModule.forRoot(),
		BasicModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
