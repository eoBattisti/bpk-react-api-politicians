import axios from 'axios';

export class EventosService {
    
    constructor() {
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getEventos() {
        const { data } = await this.apiRef.get(`/eventos?ordem=ASC&ordenarPor=dataHoraInicio`);
        return data;
    }

    async getEventoById(id) {
        const { data } = await this.apiRef.get(`/eventos/${id}`);
        return data;
    }

    async getParticipantes(id) {
        const { data } = await this.apiRef.get(`/eventos/${id}/deputados`);
        return data;
    }

    async getParticipantes(id) {
        const { data } = await this.apiRef.get(`/eventos/${id}/orgaos`);
        return data;
    }

    async getPautas(id) {
        const { data } = await this.apiRef.get(`/eventos/${id}/pauta`);
        return data;
    }

    async getVotacao(id) {
        const { data } = await this.apiRef.get(`/eventos/${id}/votacoes`);
        return data;
    }
    
}

export default new EventosService;