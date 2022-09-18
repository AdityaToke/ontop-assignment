import { Component, OnInit } from '@angular/core';
import { menuListData } from './models/data';
import { Menu } from './models/type';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: Menu[] = menuListData;
  constructor() { }

  ngOnInit(): void {
  }

}
