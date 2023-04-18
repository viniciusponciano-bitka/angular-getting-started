import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor(private location: Location) {}

  goBack() {
    const actualPath = this.location.path();
    if (actualPath !== '/' && actualPath !== '') {
      this.location.back();
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
