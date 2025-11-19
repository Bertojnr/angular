import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Designationcomponent } from './designationcomponent';

describe('Designationcomponent', () => {
  let component: Designationcomponent;
  let fixture: ComponentFixture<Designationcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Designationcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Designationcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
