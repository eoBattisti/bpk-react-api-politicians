import axios from 'axios';

export class ProposicoesService {
    
    constructor() {
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getProposicoes() {
        const { data } = await this.apiRef.get(`/proposicoes?ano=2020&ordem=ASC&ordenarPor=id`);
        return data;
    }

    async getProposicaoById(id) {
        const { data } = await this.apiRef.get(`/proposicoes/${id}`);
        return data;
    }

    async getAutores(id) {
        const { data } = await this.apiRef.get(`/proposicoes/${id}/autores`);
        return data;
    }

    async getProposicoesRelacionadas(id) {
        const { data } = await this.apiRef.get(`/proposicoes/${id}/relacionadas`);
        return data;
    }

    async getTemas(id) {
        const { data } = await this.apiRef.get(`/proposicoes/${id}/temas`);
        return data;
    }
    
}

export default new ProposicoesService;