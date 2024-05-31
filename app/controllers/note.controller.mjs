import { getAllNotes } from '../services/createNote.mjs';
import { createNote } from '../services/createNote.1.mjs';
import sqlite3 from 'sqlite3';

export function loadNoteController(app) {
  app.get('/notes', async (req, res) => {
    const notes = await getAllNotes(req.session.user.id);
    res.send(notes);
  });

  app.post('/notes', async (req, res) => {
    const { title, content } = req.body;
    const { app, method } = req
    const db = app.get('g:db')
    await createNote(db, {title, content, owner_id:req.session.user.id});
    res.sendStatus(201); // Created
  });

  // Ajoutez d'autres routes pour les actions PUT et DELETE
}
