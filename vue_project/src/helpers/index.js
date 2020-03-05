
//import domtoimage from 'dom-to-image'
import STRINGS from '@/store/strings'

const stateGet = (module_name, property_name) => {
	return {
		get: function(){
			return this.$store.state[module_name][property_name];
		}
	}
}

const stateGetSet = (module_name, property_name) => {
	return {
		get: function(){
			return this.$store.state[module_name][property_name];
		},
		set: function(value){
			this.$store.commit('changeStateValue',  {module: module_name , property_name: property_name, value: value});
		}
	}
}

const getMesasgeInformation = (message_key) => {
    var system_msgs = STRINGS.SYSTEM_MESSAGES;

    var msg_object = system_msgs[message_key];

    if(!msg_object){
        return {type: '', msg: ''};
    }

    //Getting information from Strings file
    return {
        msg: msg_object.msg,
        type: system_msgs.MSG_TYPES[msg_object.type] ? system_msgs.MSG_TYPES[msg_object.type].type : 'success',
        icon: system_msgs.MSG_TYPES[msg_object.type] ? system_msgs.MSG_TYPES[msg_object.type].icon : ''
    }
}

const getMessage = (message) => {
    var msg_key = message['msg_key'];
    var msg = msg_key ? getMesasgeInformation(msg_key) : message;    
    return msg;
}

const showMessage = (current_object, message) => {        
    if(typeof message == 'string')
        message = {msg_key: message};

    var msg = getMessage(message);
    msg.type = message.type ||  msg.type; //Overwriting default message type specified on String file
    msg.icon = message.icon ||  msg.icon; //Overwriting default message icon specified on String file

    current_object.$store.dispatch('showMessage', msg);
}

const confirm = (current_object, message_key) => {
    var system_msgs = STRINGS.SYSTEM_MESSAGES.CONFIRM_MESSAGES;
    
    //Getting message text
    var msg = {msg: '', type: '', icon: ''};
    if(message_key && system_msgs[message_key])
        msg['msg'] = system_msgs[message_key];
    else{
        msg = getMessage({msg_key: message_key});
        if(!msg['msg']) msg['msg'] = message_key;
    }
    
    let resolve_promise, reject_promise;
    var promise = new Promise((resolve, reject) => {
        resolve_promise = resolve;
        reject_promise = reject;
    });

    msg['callback'] = (result) => {
        if(result) 
            resolve_promise(true);
        else 
            resolve_promise(false);
    };

    current_object.$store.dispatch('showConfirm', msg);
    return promise;
}

const groupBy = (elements, key)=>{
    return elements.reduce((result, current_value) => {
        (result[current_value[key]] = result[current_value[key]] || []).push(current_value);
        return result;
    }, {})
}

const encript = (text, key) => {
    var result = '';
    for (var i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    
    return result;
}

const htmlToClipboard = (node)=>{

    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        // img.height= 80;
        // img.width = 80;

        function SelectText(element) {
            var doc = document;
            if (doc.body.createTextRange) {
                var range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(element);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }

        var div = document.createElement('div');
        div.contentEditable = true;
        div.appendChild(img);
        document.body.appendChild(div);

        // do copy
        SelectText(div);
        document.execCommand('Copy');
        document.body.removeChild(div);

    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}

const formatNumber = (value) => {
    let val = (value/1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const xox = (text) =>{
    return encript(text, process.env.VUE_APP_KEY);
}

export default {
	stateGet,
    stateGetSet,
    showMessage,
    formatNumber,
    htmlToClipboard,
    xox,
    confirm,
    STRINGS,
    tool_methods: {
        groupBy
    }
}
