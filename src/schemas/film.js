module.export = {
    "title": "Film",
    "description": "Informations sur un film",
    "type": "object",

    "properties": {
        "titre": {
            "type": "string"
        },

        "type_film": {
            "type": "string",
            "enum": ["Film", "Série"]
        },
    },

    "required": ["titre", "type_film"],
    "additionalProperties": false
}