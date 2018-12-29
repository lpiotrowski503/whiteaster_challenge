import { NgModule } from '@angular/core'

import { SettingRoutingModule } from './setting-routing.module'
import { SettingComponent } from './setting.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [SettingComponent],
  imports: [SharedModule, SettingRoutingModule]
})
export class SettingModule {}
