import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignentListComponent } from './enseignent-list.component';

describe('EnseignentListComponent', () => {
  let component: EnseignentListComponent;
  let fixture: ComponentFixture<EnseignentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
