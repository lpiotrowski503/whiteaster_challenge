import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  randomArrayStatus = ['Zaplanowany', 'W trakcie', 'Zakończony']
  randomArrayHarmonogram = ['Opóźniony', 'W terminie', 'Przed czasem']
  randomArrayBool = [true, false]

  constructor() {}

  random(arr: string[] | boolean[]) {
    return arr[Math.round(Math.random() * (arr.length - 1))]
  }

  randomLoop(num, arr) {
    for (let i = 0; i < num; i++) {
      arr.push({
        projectName: 'Miejskie Centrum Integracji Transportu',
        projectNumber: 'MIKR/01/2018',
        status: this.random(this.randomArrayStatus),
        harmonogram: this.random(this.randomArrayHarmonogram),
        message: this.random(this.randomArrayBool),
        warning: this.random(this.randomArrayBool)
      })
    }
  }
}
