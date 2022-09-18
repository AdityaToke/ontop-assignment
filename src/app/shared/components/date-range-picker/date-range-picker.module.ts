import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DateRangePickerComponent } from './date-range-picker.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  exports: [DateRangePickerComponent]
})
export class DateRangePickerModule { }
