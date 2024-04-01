import { Component } from '@angular/core';
import { ClienteComponent} from './components/pages/cliente/cliente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Cliente'
}
