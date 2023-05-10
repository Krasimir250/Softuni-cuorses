const phonebook = [];

function getContacts() {
  return phonebook.slice();
}

function addContacts(contact) {
  phonebook.push(contact);
}

module.exports = {
  getContacts,
  addContacts,
};

/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
