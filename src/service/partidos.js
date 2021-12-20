import axios from 'axios';

export class PartidosService{

    constructor() {
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getInfoPartido(id) {
        const { data } = await this.apiRef.get(`/partidos/${id}`);
        return data;
    }
    
    async getAllPartidos() {
        const { data } = await this.apiRef.get(`/partidos?itens=50&ordem=ASC&ordenarPor=sigla`);
        return data;
    }

}

export default new PartidosService;
