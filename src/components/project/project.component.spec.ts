import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProjectComponent } from './project.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectTitlePipe } from './pipes/project-title.pipe';
import { Project, ProjectStatus } from 'models/models';
import { consultationProjects } from 'test-data/consultation-projects';

@Component({
  selector: 'amh-con-project-header',
  template: '',
})
export class ProjectHeaderMockComponent {
  @Input() title = '';
  @Input() status!: ProjectStatus;
  @Input() collapsed = false;

  @Output() toggleCollapse = new EventEmitter<boolean>();
}

@Component({
  selector: 'amh-con-project-content',
  template: '',
})
export class ProjectContentMockComponent {
  @Input() project!: Project;
}

@Component({
  selector: 'amh-con-units',
  template: '',
})
export class UnitsMockComponent {
  @Input() projectId!: number;
}

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ProjectComponent,
          ProjectHeaderMockComponent,
          ProjectContentMockComponent,
          UnitsMockComponent,
          ProjectTitlePipe,
        ],
        imports: [NoopAnimationsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;

    component.project = consultationProjects[0];
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show a project', () => {
    fixture.detectChanges();
    const projectHeaderElement = fixture.debugElement.query(
      By.css('amh-con-project-header')
    );
    const projectContentElement = fixture.debugElement.query(
      By.css('amh-con-project-content')
    );
    const unitsElement = fixture.debugElement.query(By.css('amh-con-units'));

    const unitsEmptyElement = fixture.debugElement.query(
      By.css('amh-con-units-empty')
    );

    expect(projectHeaderElement).toBeTruthy();
    expect(projectContentElement).toBeTruthy();
    expect(unitsElement).toBeTruthy();

    expect(unitsEmptyElement).toBeFalsy();
  });

  it('should toggle collapse property on event toggleCollapse', () => {
    component.collapsed = false;

    fixture.detectChanges();
    jest.spyOn(component, 'toggle');

    const projectHeaderElement = fixture.debugElement.query(
      By.css('amh-con-project-header')
    );

    projectHeaderElement.triggerEventHandler('toggleCollapse', true);

    expect(component.toggle).toHaveBeenCalledWith(true);
    expect(component.collapsed).toBe(true);
  });
});
