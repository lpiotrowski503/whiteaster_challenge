import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AsideComponent } from './components/aside/aside.component'
import { ColorDirective } from './directives/color.directive'
import { RouterModule } from '@angular/router'
import { RowComponent } from './components/row/row.component'
import { HoverDirective } from './directives/hover.directive'
import { SearchFormComponent } from './components/search-form/search-form.component'
import { ChartsModule } from 'ng2-charts/ng2-charts'

@NgModule({
  declarations: [
    NavbarComponent,
    AsideComponent,
    ColorDirective,
    RowComponent,
    HoverDirective,
    SearchFormComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ChartsModule],
  exports: [
    CommonModule,
    NavbarComponent,
    AsideComponent,
    ColorDirective,
    RowComponent,
    HoverDirective,
    SearchFormComponent,
    FormsModule,
    ChartsModule
  ]
})
export class SharedModule {}
