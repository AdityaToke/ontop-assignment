import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractIndexComponent } from './screen/index.component';
import { DropdownModule } from 'src/app/shared/components/dropdown/dropdown.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DateRangePickerModule } from 'src/app/shared/components/date-range-picker/date-range-picker.module';

const routes: Routes = [
  {
    path: "",
    component: ContractIndexComponent
  }
]
@NgModule({
  declarations: [
    ContractIndexComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    DateRangePickerModule
  ]
})
export class ContractsModule { }
