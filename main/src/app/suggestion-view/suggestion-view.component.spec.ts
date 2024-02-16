import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionViewComponent } from './suggestion-view.component';

describe('SuggestionViewComponent', () => {
  let component: SuggestionViewComponent;
  let fixture: ComponentFixture<SuggestionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
