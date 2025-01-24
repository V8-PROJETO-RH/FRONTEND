export interface Job {
  id: number
  contratacao: string
  descricao: string
  modelo: string
  nome: string
  quantidade: number
  requisitos: string
  responsavel: string
  salario: number
  status: string
  funcionario: string
  atribuicoes: string
  beneficios: string
  dataCriacao: string
}

export type JobManagement = Pick<Job, "id" | "nome" | "quantidade" | "responsavel" | "status">