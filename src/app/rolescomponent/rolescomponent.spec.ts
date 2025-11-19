import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rolescomponent } from './rolescomponent';

describe('Rolescomponent', () => {
  let component: Rolescomponent;
  let fixture: ComponentFixture<Rolescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rolescomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rolescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
