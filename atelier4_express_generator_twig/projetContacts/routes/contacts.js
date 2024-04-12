import express from 'express';
import {Contact} from "../models/contact.model.js";

const router = express.Router();

const contacts = [
    new Contact(1, 'Doe', 'John', '+41680808080'),
    new Contact(2, 'Smith', 'Jane', '+41670707070'),
    new Contact(3, 'Johnson', 'Michael', '+41690909090')
];

/* GET contacts listing. */
router.get('/', function (req, res, next) {
    res.render('contacts', {contactList: contacts});
});

router.get('/add', (request, response) => {
    response.render('contact-add', {title: 'Ajout contact'});
});

router.post('/add', (req, resp) => {
    const {lastname, firstname, phoneNumber} = req.body;
    const idGenerated = contacts.length + 1;
    let newContact = new Contact(idGenerated, lastname, firstname, phoneNumber);
    contacts.push(newContact);
    resp.redirect('/contacts');
});
export default router;
