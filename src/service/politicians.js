import axios from 'axios';

export class politiciansService {
    
    constructor(){
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getAllDeputados(page){
        const { data } = await this.apiRef.get(`/deputados?pagina=${page}&itens=36&ordem=ASC&ordenarPor=nome`);
        return data; 
    }

    async getAllPartidos(){
        const { data } = await this.apiRef.get(`/partidos?itens=50&ordem=ASC&ordenarPor=sigla`);
        return data;
    }
}

export default new politiciansService();