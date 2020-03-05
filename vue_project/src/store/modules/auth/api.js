import http_request from '@/store/api'
const endpoint = http_request.default_endpoint;

export default {
    login (user) {
        return http_request.post(endpoint + 'api/login/', user);        
    },

    refreshToken (token) {
        return http_request.post(endpoint + 'api/token/refresh/', token);        
    }
}
