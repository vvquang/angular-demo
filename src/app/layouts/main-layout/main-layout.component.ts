import { Component } from '@angular/core'
import { faEnvelope, faBell, faHome, faDoorOpen, faBolt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  envelope = faEnvelope
  bell = faBell
  home = faHome
  door = faDoorOpen
  bolt = faBolt
}
