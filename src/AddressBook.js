function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;
}
//编写getInitialContacts函数并使其带有异步特征
AddressBook.prototype.getInitialContacts = function(cb) {
	var self =this;
	//使用setTimeout来做使其带有异步特征
	setTimeout(function() {
		//这是函数运行结束后要做的事情
		self.initialComplete = true;
		if(cb) {
			return cb();
		}
	}, 3);
}

AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
	return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
	//使用splice方法来删除数组
	this.contacts.splice(index, 1);
}