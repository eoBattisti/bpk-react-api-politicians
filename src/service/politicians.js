import axios from 'axios';

export class politiciansService {
    
    constructor(){
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getAllDeputados(page){
        const { data } = await this.apiRef.get(`/deputados?pagina=${page}&itens=12&ordem=ASC&ordenarPor=nome`);
        return data; 
    }

    async getAllPartidos(){
        const { data } = await this.apiRef.get(`/partidos?itens=40&ordem=ASC&ordenarPor=sigla`);
        return data;
    }

    async getDeputadosByPartido(sigla){
        const { data } = await this.apiRef.get(`/deputados?siglaPartido=${sigla}&itens=100&ordem=ASC&ordenarPor=nome`);
        return data;
    }
}

export default new politiciansService();