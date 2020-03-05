export default {
	MODULE_NAMES: {
        APPOINTMENT: 'appointment',
        AUTH: 'auth',
        DOCTOR: 'doctor',
        SYSTEM: 'system'
    },
    
    SYSTEM_MESSAGES: {
        //Defining messages types
        MSG_TYPES: {
			SUCCESS: {
                icon: 'mdi-close-circle',
                type: 'success',
            },
			ERROR: {
                icon: 'mdi-close-circle',
                type: 'error',
            },
            WARNING: {
                icon: 'mdi-close-circle',
                type: 'warning'
            }         
        },
        
        LOGIN_FAILED: {
            msg: 'login_failed',
            type: 'ERROR'
        },

        //General app messages
        SAVE_SUCCESS: {
            msg: 'record_saved_successful',
            type: 'SUCCESS'
        },

        PASSWORD_CHANGE_SUCCESS: {
            msg: 'password_change_success',
            type: 'SUCCESS'
        },        

        ERROR_CHANGIN_PASSWORD: {
            msg: 'error_changin_password',
            type: 'ERROR'
        },        

        SAVE_ERROR: {
            msg: 'saving_error',
            type: 'ERROR'
        },

        DELETE_SUCCESS: {
            msg: 'deleted_successful',
            type: 'SUCCESS'
        },

        DELETE_ERROR: {
            msg: 'deleted_error',
            type: 'ERROR'
        },

        ERROR_LOADING_DATA: {
            msg: 'error_loading_data',
            type: 'ERROR'
        },

        PASSWORD_NOT_MATCH: {
            msg: 'password_not_match',
            type: 'WARNING'
        },

        CLIENT_HAS_NO_SERVICE: {
            msg: 'client_has_no_service',
            type: 'WARNING'
        },

        SHOULD_SELECT_ONE_PRODUCT: {
            msg: 'should_select_one_product',
            type: 'WARNING'
        },

        SHOULD_SELECT_ONE_PRODUCT_TO_PAY: {
            msg: 'should_select_one_product_to_pay',
            type: 'WARNING'
        },

        AMOUNT_GREATER_THAN_0: {
            msg: 'amount_greater_than_0',
            type: 'WARNING'
        },

        DEBIT_NOTE_SHOULD_BE_LESSS: {
            msg: 'debit_note_should_be_lesss',
            type: 'WARNING'
        },        

        FILL_FORM: {
            msg: 'please_fill_form',
            type: 'WARNING'            
        },
        
        FEE_GREATER_THAN_PRICE: {
            msg: 'fee_greater_than_price',
            type: 'WARNING'     
        },

        FEE_GREATER_THAN_BALANCE: {
            msg: 'fee_greater_than_balance',
            type: 'WARNING'     
        },        

        SHOULD_PAY_MORE_THAN_0: {
            msg: 'should_pay_more_than_0',
            type: 'WARNING'     
        },

        SHOULD_SELECT_ONE_EXPENSE: {
            msg: 'should_select_one_expense',
            type: 'WARNING'     
        },

        EXPENSE_MORE_THAN_0: {
            msg: 'expense_more_than_0',
            type: 'WARNING'     
        },    

        ADJUST_MORE_THAN_0: {
            msg: 'adjust_more_than_0',
            type: 'WARNING'     
        },    

        SHOULD_CHOOSE_ACCOUNT: {
            msg: 'should_choose_account',
            type: 'WARNING'     
        },    

        SHOULD_CHOOSE_ACTION: {
            msg: 'should_choose_action',
            type: 'WARNING'     
        },   

        DEBIT_NOTE_ERROR: {
            msg: 'debit_note_error',
            type: 'ERROR'
        },        

        DEBIT_NOTE_SUCCESS: {
            msg: 'debit_note_success',
            type: 'SUCCESS'
        },

        NO_DATA_FOUND: {
            msg: 'no_data_found',
            type: 'SUCCESS'
        },

        EMAIL_NOT_MATCH: {
            msg: 'email_not_match',
            type: 'SUCCESS'
        },

        //Setting up confirm messages
        CONFIRM_MESSAGES: {
            SAVE_CONFIRM: 'save_confirmation',
            DELETE_CONFIRM: 'delete_confirmation',
            SURE_CANCEL: 'sure_cancel',
            SURE_DISABLE_PRODUCT: 'sure_disable_product',
            SURE_APPLY_PAYMENT: 'sure_apply_payment',
            SURE_APPLY_EXPENSE: 'sure_apply_expense',
            SURE_APPLY_DEBIT_NOTE: 'sure_apply_debit_note',
            SURE_APPLY_ADJUST: 'sure_apply_adjust',
            SURE_GENERATE_BILL: 'sure_generate_bill',
            MARK_COMPLETE: 'mark_complete'
        }
    }
}