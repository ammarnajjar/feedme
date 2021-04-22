import { Component } from '@angular/core';
import { sample } from 'lodash-es';
import { recipes } from './recipes.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recipe = '...';

  feed(): void {
    this.recipe = sample(recipes) as string;
  }
}
