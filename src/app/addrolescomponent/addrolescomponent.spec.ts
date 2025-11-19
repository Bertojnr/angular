import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addrolescomponent } from './addrolescomponent';

describe('Addrolescomponent', () => {
  let component: Addrolescomponent;
  let fixture: ComponentFixture<Addrolescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addrolescomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addrolescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
