import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../../../models/models';

@Pipe({
  name: 'projectTitle',
})
export class ProjectTitlePipe implements PipeTransform {
  transform(project: Project): string {
    return project.address.city
      ? `${project.name} | ${project.address.city}`
      : project.name;
  }
}
