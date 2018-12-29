import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/my-account/my-account.module#MyAccountModule'
  },
  {
    path: 'myaccount',
    loadChildren: './modules/my-account/my-account.module#MyAccountModule'
  },
  {
    path: 'projects',
    loadChildren: './modules/projects/projects.module#ProjectsModule'
  },
  {
    path: 'program',
    loadChildren: './modules/program/program.module#ProgramModule'
  },
  {
    path: 'wallet',
    loadChildren: './modules/wallet/wallet.module#WalletModule'
  },
  {
    path: 'administration',
    loadChildren:
      './modules/administration/administration.module#AdministrationModule'
  },
  {
    path: 'setting',
    loadChildren: './modules/setting/setting.module#SettingModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
