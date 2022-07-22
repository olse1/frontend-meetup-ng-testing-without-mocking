import { consultationProjects } from '../../../test-data/consultation-projects';
import { ProjectTitlePipe } from './project-title.pipe';

describe('ProjectTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new ProjectTitlePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return title with project name and city', () => {
    const pipe = new ProjectTitlePipe();
    const project = consultationProjects[0];

    expect(pipe.transform(project)).toBe('Test Project | München');
  });

  it('should return title with project name only', () => {
    const pipe = new ProjectTitlePipe();
    const project = consultationProjects[0];
    project.address.city = '';

    expect(pipe.transform(project)).toBe('Test Project');
  });
});
