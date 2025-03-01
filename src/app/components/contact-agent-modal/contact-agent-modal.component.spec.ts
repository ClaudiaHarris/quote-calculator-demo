import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAgentModalComponent } from './contact-agent-modal.component';

describe('ContactAgentModalComponent', () => {
  let component: ContactAgentModalComponent;
  let fixture: ComponentFixture<ContactAgentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAgentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAgentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
