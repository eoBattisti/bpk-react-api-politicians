import axios from 'axios';

export class VotacaoService {
    
    constructor() {
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getVotacao() {
        const { data } = await this.apiRef.get(`/votacoes?ordem=DESC&ordenarPor=dataHoraRegistro`);
        return data;
    }

    async getVotacaoById(id) {
        const { data } = await this.apiRef.get(`/votacoes/${id}`);
        return data;
    }

    async getOrientacoes(id) {
        const { data } = await this.apiRef.get(`/votacoes/${id}/orientacoes`);
        return data;
    }

    async getVotos(id) {
        const { data } = await this.apiRef.get(`/votacoes/${id}/votos`);
        return data;
    }
    
}

export default new VotacaoService;