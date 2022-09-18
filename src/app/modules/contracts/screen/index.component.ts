import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import dayjs from 'dayjs/esm';
import { fromEvent } from 'rxjs';
import { DropdownList } from 'src/app/shared/components/dropdown/dropdown.component';
import { mockedContractData } from '../models/data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ContractIndexComponent implements OnInit {
  filterGroup = new FormGroup({
    contract_date_range: new FormControl({
      startDate: dayjs(),
      endDate: dayjs(),
    }),
    contract_type: new FormControl(''),
    contract_name: new FormControl(''),
    contract_status: new FormControl(''),
  });
  contractData = mockedContractData;
  contractTypeList: DropdownList[] = [
    {
      title: 'Full Time',
      value: 'full_time',
    },
    {
      title: 'Part Time',
      value: 'part_time',
    },
  ];
  isDesktop = false;
  constructor() {
    this.deviceChecker();
  }
  ngOnInit(): void {
    this.filterGroup.valueChanges.subscribe((res) => {
      /* Based on the filter change we can call the API to load the table */
    });
  }
  deviceType(width: number): void {
    const currentWidth = width ? width : window.innerWidth;
    this.isDesktop = currentWidth > 768;
  }
  deviceChecker() {
    this.deviceType(0);
    fromEvent(window, 'resize')
      .pipe(map((val: any) => val['target']['innerWidth']))
      .subscribe((width) => {
        this.deviceType(width);
      });
  }
}
