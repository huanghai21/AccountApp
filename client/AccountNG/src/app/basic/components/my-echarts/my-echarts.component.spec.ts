import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEchartsComponent } from './my-echarts.component';

describe('MyEchartsComponent', () => {
  let component: MyEchartsComponent;
  let fixture: ComponentFixture<MyEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
