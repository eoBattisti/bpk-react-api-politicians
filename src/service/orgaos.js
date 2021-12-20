import axios from 'axios';

export class VotacaoService {
    
    constructor() {
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getOrgao() {
        const { data } = await this.apiRef.get(`/orgaos?ordem=ASC&ordenarPor=id`);
        return data;
    }

    async getOrgaoById(id) {
        const { data } = await this.apiRef.get(`/orgaos/${id}`);
        return data;
    }

    async getMembros(id) {
        const { data } = await this.apiRef.get(`/orgaos/${id}/mebros`);
        return data;
    }

    async getEventos(id) {
        const { data } = await this.apiRef.get(`/votacoes/${id}/eventos?ordem=ASC&ordenarPor=dataHoraInicio`);
        return data;
    }

    async getVotacoes(id) {
        const { data } = await this.apiRef.get(`/votacoes/${id}/votacoes?ordem=DESC&ordenarPor=dataHoraRegistro`);
        return data;
    }
    
}

export default new VotacaoService;
