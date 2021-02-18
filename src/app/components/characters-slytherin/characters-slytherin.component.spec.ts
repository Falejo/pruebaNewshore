import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSlytherinComponent } from './characters-slytherin.component';

describe('CharactersSlytherinComponent', () => {
  let component: CharactersSlytherinComponent;
  let fixture: ComponentFixture<CharactersSlytherinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersSlytherinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSlytherinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
