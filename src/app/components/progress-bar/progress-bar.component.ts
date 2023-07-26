// Angular modules
import { Component } from '@angular/core'
import { Input } from '@angular/core'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() withLabel = false
}
