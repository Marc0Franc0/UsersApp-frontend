import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewContactComponent } from './form-new-contact.component';

describe('FormNewContactComponent', () => {
  let component: FormNewContactComponent;
  let fixture: ComponentFixture<FormNewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
