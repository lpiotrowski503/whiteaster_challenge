import { NgModule } from '@angular/core'

import { ProgramRoutingModule } from './program-routing.module'
import { ProgramComponent } from './program.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [ProgramComponent],
  imports: [SharedModule, ProgramRoutingModule]
})
export class ProgramModule {}
