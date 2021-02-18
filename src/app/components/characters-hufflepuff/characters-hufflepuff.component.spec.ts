import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersHufflepuffComponent } from './characters-hufflepuff.component';

describe('CharactersHufflepuffComponent', () => {
  let component: CharactersHufflepuffComponent;
  let fixture: ComponentFixture<CharactersHufflepuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersHufflepuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersHufflepuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
