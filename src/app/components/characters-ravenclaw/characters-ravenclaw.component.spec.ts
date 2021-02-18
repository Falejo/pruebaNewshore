import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersRavenclawComponent } from './characters-ravenclaw.component';

describe('CharactersRavenclawComponent', () => {
  let component: CharactersRavenclawComponent;
  let fixture: ComponentFixture<CharactersRavenclawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersRavenclawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersRavenclawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
