import { Component } from "@angular/core";

@Component({
  selector: '.app-container-modal',
  template: `<div appModal></div>`,
  styles: [`
  div {
    background-color: blue;
    width: 200px;
    height: 100px;
  }`]
})
export class ContainerModalComponent {
}
