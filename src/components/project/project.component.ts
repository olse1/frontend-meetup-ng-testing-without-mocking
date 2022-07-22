import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Project } from '../../models/models';

@Component({
  selector: 'amh-con-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'collapsed',
        style({
          height: '0px',
        })
      ),
      transition('open => collapsed', [animate('.55s ease-in-out')]),
      transition('collapsed => open', [animate('.55s ease-in-out')]),
    ]),
  ],
})
export class ProjectComponent {
  @Input() project!: Project;

  @Input() collapsed = true;

  toggle(collapsed: boolean) {
    this.collapsed = collapsed;
  }
}
