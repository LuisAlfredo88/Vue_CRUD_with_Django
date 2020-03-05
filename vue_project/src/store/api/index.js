import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const API_URL = process.env.VUE_APP_API_URL;
const TENANT_API_URL = process.env.VUE_APP_TENANT_API_URL;

const getUserToken = () => {
	var user = (localStorage.getItem('user') || '{}').toJSON();
	if(!user) return null;

	return user.access;
}

//Use this if you would like to use Bearer token to comunicate with your API
axios.interceptors.request.use((config) => {
    if(process.env.NODE_ENV == 'production')
        config.headers.Pragma = 'no-cache';
    
    var user_token = getUserToken();
	if(!user_token) return config;
    
    //config.headers.Authorization =  'Bearer {0}'.format(encodeURIComponent(user_token));
    config.headers.Authorization =  'Bearer {0}'.format(user_token);
    return config;
}, (error) => {
	return Promise.reject(error);
});

export default {
    default_endpoint: API_URL,
    
    getTenantURL (api_url) {
        const domain = localStorage.getItem('current_domain');
        return TENANT_API_URL.format(domain) + (api_url || '');
    },

	get: (url)=> {
		return new Promise((result, reject) => {
			axios.get(url)
				.then(response => {
					result(response.data);
				})
				.catch(e => {
					reject(e);		      
				})
			})
	},

    delete: (url)=> {
		return new Promise((result, reject) => {
			axios.delete(url)
				.then(response => {
					result(response.data);
				})
				.catch(e => {
					reject(e);		      
				})
			})
    },
    
	post: (url, data) => {
		return new Promise((result, reject)=>{
			axios.post(url, data)
				.then(response => {
					result(response.data);
				})
				.catch(e => {
					reject(e);		      
				})
		})
	},

	put: (url, data) => {
		return new Promise((result, reject)=>{
			axios.put(url, data)
				.then(response => {
					result(response.data);
				})
				.catch(e => {
					reject(e);		      
				})
		})
	},

	patch: (url, data) => {
		return new Promise((result, reject)=>{
			axios.patch(url, data)
				.then(response => {
					result(response.data);
				})
				.catch(e => {
					reject(e);		      
				})
		})
	},

	uploadFile: (url, file_object) => {
		var form_data = new FormData();
		form_data.append("image", file_object.files[0]);
		axios.post(url, form_data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
	
}
