import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoEspecificacaoComponent } from './servico-especificacao.component';

describe('ServicoEspecificacaoComponent', () => {
  let component: ServicoEspecificacaoComponent;
  let fixture: ComponentFixture<ServicoEspecificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoEspecificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoEspecificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
