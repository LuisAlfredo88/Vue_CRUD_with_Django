import http_request from '@/store/api'

const ENDPOINT = http_request.default_endpoint;
const API_URL = ENDPOINT + 'api/core/client/';

export default {    
    getAll (pagination) {
        var offset = (pagination.page -1) * pagination.itemsPerPage; 
        var limit_string = '?limit={0}&offset={1}'.format(pagination.itemsPerPage, offset);
        return http_request.get(API_URL + limit_string); ;        
    },

    save: (record) => {
        if(record.id)
    		return http_request.put(API_URL + record.id, record);
        else
	    	return http_request.post(API_URL, record);
    },

    get (id) {
        return http_request.get(API_URL + id);        
    }
}
