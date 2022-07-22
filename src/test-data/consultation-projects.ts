import { Project, ProjectImageType, ProjectStatus } from '../models/models';

export const consultationProjects: Project[] = [
  {
    status: ProjectStatus.Waiting,
    id: 8500,
    name: 'Test Project',
    occupancyReady: 'ab Q4/2023',
    address: {
      street: 'Test Straße',
      streetNumber: '75',
      city: 'München',
      zipCode: '12345',
      district: 'Bezirk 1',
      state: 'Bayern',
      country: 'Deutschland',
      displayStreetAndNumber: true,
    },
    availableUnitsCount: 117,
    images: [
      {
        id: 136,
        type: ProjectImageType.TITLE,
        url: 'https://project-information-develop.s3.eu-central-1.amazonaws.com/8500/images/136/title1.jpg',
      },
      {
        id: 137,
        type: ProjectImageType.GALLERY,
        url: 'https://project-information-develop.s3.eu-central-1.amazonaws.com/8500/images/137/gallery1.jpg',
      },
      {
        id: 138,
        type: ProjectImageType.GALLERY,
        url: 'https://project-information-develop.s3.eu-central-1.amazonaws.com/8500/images/138/gallery2.jpg',
      },
      {
        id: 139,
        type: ProjectImageType.GALLERY,
        url: 'https://project-information-develop.s3.eu-central-1.amazonaws.com/8500/images/139/gallery3.jpg',
      },
      {
        id: 140,
        type: ProjectImageType.DESCRIPTION,
        url: 'https://project-information-develop.s3.eu-central-1.amazonaws.com/8500/images/140/description1.jpg',
      },
      {
        id: 141,
        type: ProjectImageType.LOGO,
        url: 'https://project-information-develop.s3.eu-central-1.amazonaws.com/8500/images/141/logo1.png',
      },
    ],
    url: 'https://test-project.de/',
  },
];

export const consultationProjectsEmpty: Project[] = [
  {
    status: ProjectStatus.None,
    id: 8500,
    name: 'Test Project',
    occupancyReady: 'ab Q4/2023',
    address: {
      street: '',
      streetNumber: '',
      city: '',
      zipCode: '',
      district: '',
      state: '',
      country: '',
      displayStreetAndNumber: false,
    },
    availableUnitsCount: 117,
    images: [],
    url: 'https://test-project.de/',
  },
];
