export enum ProjectImageType {
  DESCRIPTION = 'DESCRIPTION',
  GALLERY = 'GALLERY',
  LOGO = 'LOGO',
  TITLE = 'TITLE',
}

export interface ProjectImage {
  id: number;
  type: ProjectImageType;
  url: string;
}

export interface ProjectAddress {
  street: string;
  streetNumber: string;
  city: string;
  zipCode: string;
  district: string;
  state: string;
  country: string;
  displayStreetAndNumber: boolean;
}

export enum ProjectStatus {
  Waiting = 'waiting',
  InConsultation = 'in_consultation',
  None = '',
}

export interface Project {
  status: ProjectStatus;
  id: number;
  name: string;
  address: ProjectAddress;
  availableUnitsCount: number;
  occupancyReady: string;
  images: ProjectImage[];
  url: string;
}

export interface UnitPrice {
  value: number;
  currency: string;
}

export interface UnitSize {
  value: number;
  measure: string;
}

export enum UnitStatus {
  Available = 'AVAILABLE',
  Reserved = 'RESERVED',
  Sold = 'SOLD',
  Blocked = 'BLOCKED',
  ExternalManaged = 'EXTERNAL_MANAGED',
  Deleted = 'DELETED',
  Other = 'OTHER',
}

export interface Unit {
  id: number;
  projectId: number;
  name: string;
  size: UnitSize | null;
  price: UnitPrice | null;
  rooms: number | null;
  floor: string | null;
  languageCode: string;
  status: UnitStatus;
}
