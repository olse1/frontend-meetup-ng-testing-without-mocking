import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostBinding,
  HostListener,
} from '@angular/core';
import { ProjectStatus } from '../../models/models';

@Component({
  selector: 'amh-con-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() status!: ProjectStatus;

  @Output() toggleCollapse = new EventEmitter<boolean>();

  @Input()
  @HostBinding('class.collapsed')
  collapsed = false;

  consultationStatusMap = new Map<ProjectStatus | null, string>([
    [ProjectStatus.InConsultation, 'In Beratung'],
    [ProjectStatus.Waiting, 'Beratung angefragt'],
  ]);

  ngOnInit(): void {
    this.toggleCollapse.emit(this.collapsed);
  }

  @HostListener('click')
  onToggleCollapse() {
    this.collapsed = !this.collapsed;
    this.toggleCollapse.emit(this.collapsed);
  }

  get statusText() {
    return this.consultationStatusMap.get(this.status);
  }
}
