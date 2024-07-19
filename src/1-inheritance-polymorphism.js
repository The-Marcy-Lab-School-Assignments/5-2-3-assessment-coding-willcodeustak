class Phone {
  constructor(phoneNumber, contacts,addContact,makeCall,removeContact) {
    this.phoneNumber = phoneNumber;
    this.contacts = contacts;
    this.addContact = addContact
    this.makeCall = makeCall
    this.removeContact = removeContact

  }
}

class AppleIPhone {

}

module.exports = {
  Phone,
  AppleIPhone,
};
