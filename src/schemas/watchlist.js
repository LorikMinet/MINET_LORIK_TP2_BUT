module.export = {
    "title": "Watchlist",
    "description": "Informations sur la watchlist d'une personne",
    "type": "object",

    "properties": {
        "nom": {
            "type": "string"
        },

        "utilisateurId": {
            "type": "number"
        },

        "items": {
            "type": "array",
            "films": {
                "type": "string"
            },

            "etat": {
                "enum": ["A Voir", "En cours", "Termine", "Abandonne"]
            }
        },
    },

    "required": ["nom", "utilisateurId"],
    "additionalProperties": false
}