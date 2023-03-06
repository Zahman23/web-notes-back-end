const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
    const { tittle , tags, body} = request.payload;

    const id = nanoid(16);
    const createAt = new Date().toISOString();
    const updateAt = createAt;

    const newNotes = {
        tittle , tags , body , id, createAt, updateAt
    }

    notes.push(newNotes);

    const isSucces = notes.filter((note) => note.id === id ).length > 0;

    if (isSucces){
        const response = h.response({
           status:'succes',
           message:`Catatan berhasil ditambakan`,
           data:{
            noteId: id,
           }
        })
        response.code(201);
        return response;
    }

    const response = h.response({
        status:'fail',
        message:'Catatan Gagal ditambakan'
    })
    response.code(500);
    return response;
};

const getAllNotesHandle = () => ({
    status: 'succes',
    data: {
        notes,
    },
});

const getIdNotesHandle = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if(note !== undefined) {
      return {
        status: 'success',
        data: {
            note,
        },
      };
    }

    const response = h.response({
        status: 'fail',
        message:'Catatan tidak ditemukan'
    });

    response.code(404);
    return response;
};

const editIdNotesHandle = (request, h) => {
    const { id } = request.params;

    const { title, tags, body} = request.payload;
    const updateAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id);

    if(index !== -1) {
       notes[index]= {
        ...notes[index],
        title,
        tags,
        body,
        updateAt
       };

       const response = h.response({
        status: 'success',
        message: 'Data berhasil diganti'
       })

       response.code(200);
       return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Data Gagal di Memperbarui, id tidak ditemukan'
    })

    response.code(404);
    return response;
};

const deletIdNotesHandle = (request, h) => {
    const { id } = request.params;


    const index = notes.findIndex((n) => n.id === id);

    if(index !== -1) {
        notes.splice(index, 1)

        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil dihapus'
        })

        response.code(200);
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal dihapus'
    })

    response.code(404);
    return response;


}

module.exports = {addNoteHandler, getAllNotesHandle, getIdNotesHandle, editIdNotesHandle, deletIdNotesHandle};