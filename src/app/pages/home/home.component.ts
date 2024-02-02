import { Component } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pergunta:string = ''
  resposta:string[] = ['', '', '', '', '']

  constructor() {
    this.pergunta = 'aslsdjkfasldfjkalsdfjasdlf'
    this.resposta = ['asdf', 'qwer', 'zxcv', 'rewq', 'fdsa']
  }

  onClick(event: MouseEvent): void {
    console.log('click');
  }
}
