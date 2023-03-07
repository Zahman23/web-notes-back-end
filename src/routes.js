const { addNoteHandler, getAllNotesHandle, getIdNotesHandle, editIdNotesHandle, deleteIdNotesHandle } = require("./handler");

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
        handler: deleteIdNotesHandle,
    }
]

module.exports = routes;