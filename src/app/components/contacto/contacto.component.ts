import { Component, Input } from '@angular/core';
import { Contact} from 'src/app/models/Contact';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
@Input() contacts?:Contact[];
}
