import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  asideItems = [
    {
      text: ['Aktywne Projekty', ''],
      total: []
    },
    {
      text: ['W terminie', ''],
      total: []
    },
    {
      text: ['Opóźnione', ''],
      total: []
    },
    {
      text: ['Przed czasem', ''],
      total: []
    }
  ]

  data = {
    header: 'Ewidencja projektów',
    search: {
      projectName: 'Nazwa Projektu',
      projectNumber: 'Numer projektu',
      status: 'Status',
      harmonogram: 'Harmonogram'
    },
    rowsHeader: {
      projectName: 'Nazwa Projektu',
      projectNumber: 'Numer',
      status: 'Status',
      harmonogram: 'Harmonogram'
    },
    message: {
      on: 'assets/icons/message.svg',
      off: 'assets/icons/no-message.svg'
    },
    warning: {
      on: 'assets/icons/warning.svg',
      off: 'assets/icons/no-warning.svg'
    },
    pagination: {
      leftArrow: 'assets/icons/left-arrow.svg',
      rightArrow: 'assets/icons/right-arrow.svg'
    }
  }

  constructor() {}
}
