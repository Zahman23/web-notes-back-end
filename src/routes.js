const { addNoteHandler, getAllNotesHandle, getIdNotesHandle, editIdNotesHandle, deletIdNotesHandle } = require("./handler");

const routes = [
    {
        method:'POST',
        path:'/notes',
        handler: addNoteHandler,
    },
    {
        method:'GET',
        path:'/notes',
        handler: getAllNotesHandle,
    },
    {
        method:'GET',
        path:'/notes/{id}',
        handler: getIdNotesHandle,
    },
    {
        method:'PUT',
        path:'/notes/{id}',
        handler: editIdNotesHandle,
    },
    {
        method:'DELETE',
        path:'/notes/{id}',
        handler: deletIdNotesHandle,
    }
]

module.exports = routes;