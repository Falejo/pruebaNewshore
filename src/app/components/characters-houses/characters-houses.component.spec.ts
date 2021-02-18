import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersHousesComponent } from './characters-houses.component';

describe('CharactersHousesComponent', () => {
  let component: CharactersHousesComponent;
  let fixture: ComponentFixture<CharactersHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
