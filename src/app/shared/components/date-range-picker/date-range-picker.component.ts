import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			useExisting: DateRangePickerComponent,
			multi: true,
		},
	],
})
export class DateRangePickerComponent implements OnInit, ControlValueAccessor {
  @Input("class") externalClasses: string = "";
  @Input() title: string = "";
	value: any;
  constructor() { }

  ngOnInit(): void {
  }
  changePicker(data: any): void {
    this.onChange(data);
  }
  protected onChange = (value: any) => {};
	protected onTouched = () => {};
  writeValue(obj: any) {
    this.value = obj;
	}

	registerOnChange(fn: any) {
		this.onChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}
}
