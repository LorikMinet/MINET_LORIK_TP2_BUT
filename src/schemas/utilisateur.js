module.exports = {
    "title": "Utilisateur",
    "description": "Informations sur un utilisateur",
    "type": "object",

    "properties" : {
        "nom": {
            "type": "string"
        },
        
        "prenom": {
            "type": "string"
        },
        
        "email": {
            "type": "string",
            "format": "email"
        }
    },

    "required": ["nom", "prenom", "email"],
    "additionalProperties": false
}