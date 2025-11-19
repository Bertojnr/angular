import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livingcomponent } from './livingcomponent';

describe('Livingcomponent', () => {
  let component: Livingcomponent;
  let fixture: ComponentFixture<Livingcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livingcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Livingcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
