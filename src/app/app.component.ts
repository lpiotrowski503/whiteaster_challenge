import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  navbarData = [
    {
      text: 'Moje konto',
      href: 'myaccount',
      icon: 'assets/icons/my-account.svg'
    },
    {
      text: 'Projekty',
      href: 'projects',
      icon: 'assets/icons/projects.svg'
    },
    {
      text: 'Program',
      href: 'program',
      icon: 'assets/icons/program.svg'
    },
    {
      text: 'Portfel',
      href: 'wallet',
      icon: 'assets/icons/wallet.svg'
    },
    {
      text: 'Administracja',
      href: 'administration',
      icon: 'assets/icons/administration.svg'
    },
    {
      text: 'Ustawienia',
      href: 'setting',
      icon: 'assets/icons/setting.svg'
    }
  ]
}
