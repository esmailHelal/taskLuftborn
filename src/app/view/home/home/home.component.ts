import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: any = [];
  constructor(public _ApiServiceService: ApiServiceService) {}

  ngOnInit(): void {
    this._ApiServiceService.getItems().subscribe((res) => {
      this.items = res;
      this.items.forEach((element: any) => {
        Object.assign(element, { active: false });
      });
    });
  }

  trigger(item: any, index: any) {
    item.active = true;
    this.items.forEach((element: any, i: any) => {
      if (index != i) element.active = false;
    });
  }
}
