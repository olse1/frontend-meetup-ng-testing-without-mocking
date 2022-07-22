import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CancelConsultationReason } from '@consultation-workspace/shared/myplace-api';
import { DialogService } from '@ngneat/dialog';
import { Unit, UnitStatus } from '../../models/models';

@Component({
  selector: 'amh-con-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit {
  @Input() projectId!: number;
  units$!: Observable<Unit[]>;
  loading$!: Observable<boolean>;

  @Output() unitsEmpty = new EventEmitter<boolean>();

  constructor(
    private dialog: DialogService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadUnits({ projectId: this.projectId }));

    this.units$ = this.store.select(selectAllUnitsForProject(this.projectId));
    this.loading$ = this.store.select(selectLoadingForProject(this.projectId));
  }

  removeUnit(unit: Unit) {
    const reasons: CancelConsultationReason[] =
      unit.status !== UnitStatus.Available
        ? [CancelConsultationReason.UnitNotAvailable]
        : [];

    this.dialog.open(CancelConsultationModalComponent, {
      data: {
        unitName: unit.name,
        unitId: unit.id,
        projectId: this.projectId,
        skipCancelReasons: reasons.length > 0,
        reasons,
      },
      container: this.modalService.modalReference,
    });
  }
}
