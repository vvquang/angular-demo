import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ROLES } from '@app/constants/common'
import { storageKeys } from '@app/constants/storage-keys'
import { ERole } from '@app/enums/role.enum'
import { IAuthStorage } from '@app/models/auth.model'
import { AuthService } from '@app/services/auth.service'
import { LocalStorageService } from '@app/services/local-storage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  roleLabel: string | null = null

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const authProfile = this.storageService.getValue<IAuthStorage>(storageKeys.authProfile)
    this.roleLabel = ROLES.filter((i) => i.role === authProfile?.role)[0]?.label
  }

  public async onLogout() {
    this.storageService.remove(storageKeys.authProfile)
    await this.authService.logout()

    // Redirect to home
    this.router.navigate(['/auth/login'])
  }
}
