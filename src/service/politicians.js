import axios from 'axios';

export class politiciansService {

    constructor() {
        this.apiRef = axios.create({
            baseURL: `https://dadosabertos.camara.leg.br/api/v2`,
        });
    }

    async getAllDeputados(page) {
        const { data } = await this.apiRef.get(`/deputados?pagina=${page}&itens=12&ordem=ASC&ordenarPor=nome`);
        return data;
    }

    async getDeputadoById(id) {
        const { data } = await this.apiRef.get(`/deputados/${id}`);
        return data;
    }

    async getDespesas(id, mes = 6) {
        const { data } = await this.apiRef.get(`/deputados/${id}/despesas?ano=2021&mes=${mes}&itens=100&ordem=ASC&ordenarPor=dataDocumento`)
        return data;
    }

    async getDeputadosByPartido(sigla) {
        const { data } = await this.apiRef.get(`/deputados?siglaPartido=${sigla}&itens=100&ordem=ASC&ordenarPor=nome`);
        return data;
    }

    async getDiscursos(id){
        const { data } = await this.apiRef.get(`/deputados/${id}/discursos?ordem=ASC&ordenarPor=dataHoraInicio`);
        return data;
    }

    async getEventos(id){
        const { data } = await this.apiRef.get(`/deputados/${id}/eventos?ordenarPor=dataHoraInicio&ordem=ASC`);
        return data;
    }

    async getFrentesParlamentares(id){
        const { data } = await this.apiRef.get(`/deputados/${id}/frentes`);
        return data;
    }

    async getProfissoes(id){
        const { data } = await this.apiRef.get(`/deputados/${id}/profissoes`);
        return data;
    }
    
    
    
    
    
}

export default new politiciansService();