# Coding guide & reference

To code in this project we need to follow the following below guide and rules.

## JavaScript

* ECMAScript 6 -- http://es6-features.org/#Constants
* Flux Design Pattern -- https://facebook.github.io/flux/docs/overview.html#content

## Vue

* Offical documentation - https://vuejs.org/v2/guide/

### Vue complements

* Vuex - https://vuex.vuejs.org/guide/


## Bootstrap

* Offical documentation - https://getbootstrap.com/

# Merge Request(Pull Request) strategy

We use some part of [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), we
have the following main branches:

* **master**: Production
* **qa**: QA environment
* **develop**: development environment(integration branch)

If we need add new some changes or fix something we create a **feature** or **bugfix** branch. 
For this first we need create an issue throught gitlab issue panel and then 
throught the same panel create the _merge request_(that create the branch for us.)

# Using i18n implementation
To generate a new key_language, first go to the default language "es.js" and write your entrance as below:

```html
<script>
    export default {
        my_language_key: 'Hello World'
    }
</script>
```

## How to use it

To implement i18n on your component, you just have to put your language_key inside $t function as follow:


```html
<template>
    <div>
        {{ $t("my_language_key") }} <!-- Output: Hello World -->
    </div>
</template>
```

Sending params:
```html
<script>
    export default {
        my_language_key_with_param: 'Hello {my_param}'
    }
</script>

<template>
    <div>
        {{ $t("my_language_key_with_param", {'my_param': 'World'}) }} <!-- Output: Hello World -->
    </div>
</template>
```

Using translation inside component props:

```html
<template>
    <div>
        <my-component :custom_message="$t('my_language_key')" />
    </div>
</template>
```

# Dealing with internal messages

To generate a message inside the app, you just need to write this piece of code on your script:

## Defining messages

Before generate a message, you need to define it on the string file, inside SYSTEM_MESSAGES object as fallow:

```html
<script>
export default {
    SYSTEM_MESSAGES: {
        MSG_TYPES: {
    		SUCCESS: {
                icon: 'mdi-close-circle',
                type: 'success',
            },
    		ERROR: {
                icon: 'mdi-close-circle',
                type: 'error',
            }            
        },
        
        MY_CUSTOM_MESSAGE: {
            msg: 'record_saved_successful', //i18n key for the message
            type: 'SUCCESS' //This will be the style for the message
        }
    }
}
</script>
```

## Defining confirm messages
Inside SYSTEM_MESSAGES there are a section called CONFIRM_MESSAGES where all confirms must be placed as the example bellow:

```html
<script>
export default {
    SYSTEM_MESSAGES: {
        CONFIRM_MESSAGES: {
            MY_CONFIRM_MESSAGE: 'confirmation_key_message' //i18n confirmation message
        }
    }
}
</script>
```


## Flash message

```html
<script>

    export default {
        methods: {
        
            showMessage () {
                //Using i18n key
                this.system.showMessage('MY_CUSTOM_MESSAGE');
                
                //Using message key
                this.system.showMessage({msg_key: 'MY_CUSTOM_MESSAGE'});

                //Overwriting defined message type on strings file
                this.system.showMessage({msg_key:'MY_CUSTOM_MESSAGE', type: '#f0f'});                
                
                //Using message object
                this.system.showMessage({
                    msg: 'key_message', //i18n key message 
                    type: 'success', //this could be a class like (success, error, warning) or a color like (#ofo, red, blue, #off) 
                    icon: 'mdi-close-circle' //mdi icon for material design
                });
                
            }
            
        }
    }
</script>
```

## Confirm

```html
<script>

    export default {
        methods: {
        
            async showConfirm () {
                const option = await this.system.confirm('MY_CONFIRM_MESSAGE_KEY');
                console.log(option);                
            }
            
        }
    }
</script>
```


