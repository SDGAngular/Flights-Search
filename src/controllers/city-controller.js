
const {CityService} = require('../services');


const cityService = new CityService();

class CityController{

 

    async create(request,response){

        try{
            const cityName=request.body.name;
    
            const createdCity =await cityService.addCity(cityName);
            response.status(200).json({
                hasError:false,
                responsePayload:createdCity,
                message:`${cityName} created Successfully`,
                err:{}
            })
             
    
    
        }
        catch(error){
            response.status(500).json({
                hasError:true,
                responsePayload:null,
                message:` creation failed`,
                err:error.message
            })
        }
        
    }
    
    async  get(request,response){
        
        try{
            const cityId=request.params.id;
            const city =await cityService.findCity(cityId);
            response.status(200).json({
                hasError:false,
                responsePayload:city,
                message:`Fetched Successfully`,
                err:{}
            })
             
    
    
        }
        catch(error){
            
            response.status(500).json({
                hasError:true,
                responsePayload:null,
                message:`fetch failed due to ${error.message}`,
                err:error.message
            })
        }
    }
    
    
    async  destroy(request,response){
    
        try{
            const cityId=request.body.id;
    
            await this.cityService.deleteCity(cityId);
            response.status(200).json({
                hasError:false,
                responsePayload:null,
                message:`Deleted Successfully`,
                err:{}
            })
             
    
    
        }
        catch(error){
            response.status(500).json({
                hasError:true,
                responsePayload:null,
                message:`deletion failed`,
                err:error
            })
        }
        
    }
    
    
    async  update(request,response){
    
        try {
            const response = await this.cityService.updateCity(req.params.id, req.body);
            return res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully updated a city',
                err: {}
            });
        } catch (error) {
            
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to update the city',
                err: error
            });
        }
        
    }
    
    
    async  getAll(req, res){
        try {
            const cities = await this.cityService.getAllCities(req.query);
            return res.status(200).json({
                data: cities,
                success: true,
                message: 'Successfully fetched all cities',
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to fetch the cities',
                err: error
            });
        }
    }

}


module.exports = CityController;