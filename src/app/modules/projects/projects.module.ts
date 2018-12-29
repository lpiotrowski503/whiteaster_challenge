import { NgModule } from '@angular/core'

import { ProjectsRoutingModule } from './projects-routing.module'
import { ProjectsComponent } from './projects.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [ProjectsComponent],
  imports: [SharedModule, ProjectsRoutingModule]
})
export class ProjectsModule {}
