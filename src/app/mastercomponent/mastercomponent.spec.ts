import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mastercomponent } from './mastercomponent';

describe('Mastercomponent', () => {
  let component: Mastercomponent;
  let fixture: ComponentFixture<Mastercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mastercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mastercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
