import { Component, OnInit } from '@angular/core';
import { HomeService } from '@app/services/home.service';

export interface PeriodicElement {
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  dataSource: PeriodicElement[] = [];
  displayedColumns: string[] = ['id', 'title', 'body'];

  async ngOnInit() {
    this.dataSource = await this.homeService.getPosts();
  }
}
