export const CONSTANTS = {
    TEXT: "text",
    EMAIL: "email",
    PHONE: "phone",
    FILE: "file",
    PICKLIST:"picklist",
    COLORPALETTE: "color",
}

export const FIELDS = {

    "1":  {  
        "first_name": { 
            type: CONSTANTS.TEXT,
            value: "",
            placeholder: "Jim"
        },
        "last_name": { 
                type: CONSTANTS.TEXT,
                value:"",
                placeholder:"Margeret"

        },
        "profile_image": { 
            type: CONSTANTS.FILE ,
            value:""
        } 
    },
    "2": {
        "company": {

            type: CONSTANTS.TEXT,
            value:"",
            placeholder: "Google"
        },
        "company_logo": {
            type: CONSTANTS.FILE,
            value:""
        },
        "position": {

            type: CONSTANTS.TEXT,
            value:"",
            placeholder: "Web Developer"
        }, 
        "department": {
            type: CONSTANTS.TEXT,
            value:"",
            placeholder: "IT Security Services"
        },
    },      
    "3": {
        "email": {
            type: CONSTANTS.EMAIL,
            value:"",
            placeholder: "jim@company.com"
        },
        "phone": {
            type: CONSTANTS.PHONE,
            value:"",
            placeholder: "+91 123456789"
        }, 
        "address": {
            type: CONSTANTS.TEXT,
            value:"",
            placeholder: "Boulevard, Buffalo, USA"
        },
    },
    "4": {
        "font_family": {
            type: CONSTANTS.PICKLIST,
            value:""
        },
        "backgroud_color": {
            type: CONSTANTS.COLORPALETTE,
            value:""
        },
        "color": {
            type: CONSTANTS.COLORPALETTE,
            value:""
        }
    }   
} 
export const getFields = (step) => {
       
    return FIELDS[step];
}