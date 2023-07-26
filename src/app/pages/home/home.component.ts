import { Component, OnInit } from '@angular/core'
import useToast from '@app/hooks/useToast'
import { HomeService } from '@app/services/home.service'

export interface PeriodicElement {
  id: string
  title: string
  body: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  useToast = useToast()

  constructor(private homeService: HomeService) {}

  dataSource: PeriodicElement[] = []
  displayedColumns: string[] = ['id', 'title', 'body']

  async ngOnInit() {
    this.dataSource = await this.homeService.getPosts()
  }

  public onNotiInfo() {
    useToast().showToast({
      type: 'info',
      text: 'Info !!!',
    })
  }
  public onNotiSuccess() {
    useToast().showToast({
      type: 'success',
      text: 'Success !!!',
    })
  }
  public onNotiWarring() {
    useToast().showToast({
      type: 'warring',
      text: 'Warring !!!',
    })
  }
  public onNotiError() {
    useToast().showToast({
      type: 'error',
      text: 'Error !!!',
    })
  }
}
