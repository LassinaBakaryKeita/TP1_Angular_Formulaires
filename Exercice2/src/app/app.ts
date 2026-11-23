import { Component } from '@angular/core';
import { InscriptionComponent } from './inscription/inscription';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InscriptionComponent],
  templateUrl: './app.html',
})
export class App {
  title = 'Inscription App';
}
