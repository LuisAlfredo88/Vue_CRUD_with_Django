import http_request from '@/store/api'

const ENDPOINT = http_request.default_endpoint;
const FILE_API_URL = ENDPOINT + 'api/file_upload/';

export default {    
    uploadFile (file) {
        return http_request.uploadFile(FILE_API_URL, file);        
    }
}
