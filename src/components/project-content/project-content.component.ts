import { Component, Inject, Input, OnInit } from '@angular/core';
import { Project } from '../../models/models';

@Component({
  selector: 'amh-con-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss'],
})
export class ProjectContentComponent implements OnInit {
  @Input() project!: Project;
  public titleImageUrl = '';
  public projectStreet = '';
  public projectPostalCode = '';
  public logoUrl = '';

  constructor() {}

  ngOnInit(): void {
    this.titleImageUrl = '';
    this.projectStreet = this.getStreet();
    this.projectPostalCode = this.getPostalCode();
  }

  private getStreet() {
    if (!this.project.address.displayStreetAndNumber) {
      return '';
    }
    return `${this.project.address.street} ${this.project.address.streetNumber}`;
  }

  private getPostalCode() {
    return `${this.project.address.zipCode} ${this.project.address.city}`;
  }
}
