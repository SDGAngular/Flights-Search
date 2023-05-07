
const {CityService} = require('../services');
const cityService = new CityService();


async function create(request,response){

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
            message:`${cityName} creation failed`,
            err:error
        })
    }
    
}

async function get(request,response){
    
    try{
        const cityId=request.body.cityId;
        const city =await cityService.getCity(cityId);
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
            message:`fetch failed`,
            err:error
        })
    }
}


async function destroy(request,response){

    try{
        const cityId=request.body.cityId;
        await cityService.deleteCity(cityId);
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


async function update(request,response){

    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
    
}


async function getAll(req, res){
    try {
        const cities = await cityService.getAllCities(req.query);
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

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}