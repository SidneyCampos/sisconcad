
import { CrudService } from 'src/app/services/crud.service';
import { Observable } from 'rxjs/internal/Observable';

let crud: CrudService;

export interface Paciente {
    id: string;
    identificador_ficha: string;
    nome: string;
    data_nascimento: string;
    sexo: string;
    mae: string;
    estado_civil: string;
    profissao: string;
    naturalidade: string;
    cpf: string;
    rg: string;
    endereco: string;
    cidade: string;
    data: string;
    telefone: string;
    anotacao: string;
}



