const phonebook = require("../phonebook");
const Contact = require("../models/Contact");

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();

    res.render("index", { contacts });
    // TODO: load index page
  },

  addPhonebookPost: (req, res) => {
    let name = req.body.name;
    let number = req.body.number;

    if (name !== "" && number !== "") {
      const contact = new Contact(name, number);

      phonebook.addContacts(contact);
    } else {
    }
    res.redirect("/");
  },
};
