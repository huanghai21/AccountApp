import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderBean } from './order-bean';
@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})

export class OrderFormComponent implements OnInit {
	public names = [
		'龙猫',
		'龙湖',
		'顶峰'
	];
	public platforms = [
		'小猪',
		'AirBnb',
		'蚂蚁'
	];
	public persons = [
		'蕾',
		'王',
		'李'
	];
	public order: OrderBean;
	constructor() { }

	ngOnInit() {
		this.order = new OrderBean();
	}

	public onSubmit(event: any, orderForm: NgForm) {
		event.preventDefault();
		console.log('form is: ', orderForm);
		console.log('order is: ', this.order);
	}

}