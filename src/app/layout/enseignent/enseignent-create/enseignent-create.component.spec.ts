import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignentCreateComponent } from './enseignent-create.component';

describe('EnseignentCreateComponent', () => {
  let component: EnseignentCreateComponent;
  let fixture: ComponentFixture<EnseignentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
