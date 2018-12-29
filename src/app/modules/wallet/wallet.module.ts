import { NgModule } from '@angular/core'

import { WalletRoutingModule } from './wallet-routing.module'
import { WalletComponent } from './wallet.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [WalletComponent],
  imports: [SharedModule, WalletRoutingModule]
})
export class WalletModule {}
