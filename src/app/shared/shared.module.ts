// Angular modules
import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { ReactiveFormsModule }        from '@angular/forms';
import { RouterModule }               from '@angular/router';

// External modules
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
// import { ToastComponent }             from '@app/components/toast/toast.component';
import { ProgressBarComponent }       from '@app/components/progress-bar/progress-bar.component';

// Forms
// import { FormConfirmComponent }      from './components/forms/form-confirm/form-confirm.component';

// Modals
// import { ModalWrapperComponent }     from './components/modals/modal-wrapper/modal-wrapper.component';

// Layouts
import { HeaderComponent } from 'src/app/components/header/header.component'
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';

// Pipes

// Directives
// import { ModalWrapperDirective }     from './directives/modal-wrapper.directive';


@NgModule({
  imports         :
  [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // External modules
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,

    FontAwesomeModule,
  ],
  declarations    :
  [
    // Components
    // ToastComponent,
    ProgressBarComponent,

    // Forms
    // FormConfirmComponent,

    // Modals
    // ModalWrapperComponent,

    // Layouts
    HeaderComponent,
    MainLayoutComponent,

    // Pipes

    // Directives
    // ModalWrapperDirective
  ],
  exports         :
  [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // External modules
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    FontAwesomeModule,

    // Components
    // ToastComponent,
    ProgressBarComponent,

    // Forms
    // FormConfirmComponent,

    // // Modals
    // ModalWrapperComponent,

    // Layouts
    HeaderComponent,
    MainLayoutComponent,

    // Pipes

    // Directives
    // ModalWrapperDirective
  ],
  providers       :
  [
  ]
})
export class SharedModule {}
