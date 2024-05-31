import { createNote } from '../services/createNote.1.mjs';
import { getAllNotes } from '../services/getAllNotes.mjs';
import validator from 'validator';

export function loadNoteController(app) {
    app.get('/notes', async (req, res) => {
        try {
            const notes = await getAllNotes(req.session.user.id);
            res.send(notes);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erreur interne serveur');
        }
    });

    app.post('/add-note', async (req, res) => {
        const noteTitle = req.body.noteTitle;
        const noteContent = req.body.noteContent;
    
        // Validez le titre ici si nécessaire
        if (!validator.isLength(noteTitle, { min: 1 })) {
            res.status(400).send('Le titre de la note est requis.');
            return;
        }
    
        try {
            console.log(`Titre de la note: ${noteTitle}`);
            console.log(`Contenu de la note: ${noteContent}`);
    
            // Assurez-vous que createNote attend un objet avec title, content, et owner_id
            await createNote({ title: noteTitle, content: noteContent, owner_id: req.session.user.id });
    
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Erreur lors de l\'ajout de la note');
        }
    });
}    
