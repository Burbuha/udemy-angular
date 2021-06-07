import { Component } from '@angular/core';

@Component({
  selector: '[appModal]',
  template: `
    <div>
      <app-warning-alert></app-warning-alert>
      <app-success-alert></app-success-alert>
    </div>
  `,
  styles: [`
  div {
    background-color: yellow;
    text-align: center;
  }`]
})
export class ModalComponent {
}
