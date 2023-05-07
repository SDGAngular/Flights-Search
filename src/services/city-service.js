const { CityRepository } = require("../repository");


class CityService {
    constructor() {
        this.CityRepository=new CityRepository();
    }

    async addCity(name){

        try{
            const createdCity = await this.CityRepository.createCity(name);
            return createdCity;
        }
        catch(error){
            throw {error}
        }

    }

    async deleteCity(id){

        try{
             await this.CityRepository.deleteCity(id);
             return true;
        }
        catch(error){
            throw {error};
        }

    }

    async findCity(id){
        try{
            const city = await this.CityRepository.getCity(id);
            return city
        }
        catch(error){
            throw {error};
        }
    }
}

module.exports = CityService




