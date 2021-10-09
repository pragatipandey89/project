import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css'],
})
export class HomeDashboardComponent implements OnInit {
  name: String;
  constructor(private readonly routes: ActivatedRoute) {
    this.routes.queryParamMap.subscribe((res) => {
      this.name = res.get('name');
    });
  }

  ngOnInit(): void {
    console.log(this.name);
  }
}
