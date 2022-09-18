import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type DropdownList = {title: string, value: string, data?: unknown}
@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			useExisting: DropdownComponent,
			multi: true,
		},
	],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input("class") externalClasses: string = "";
  @Input() title: string = "";
  @Input() dropdownList: DropdownList[] = [];
  value: any;
  constructor() { }

  ngOnInit(): void {
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
