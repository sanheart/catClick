describe('Address Book', function() {
	//beforeEach函数帮助每个测试用例前运行特定代码
	var addressBook,
		thisContact;

	beforeEach(function() {
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

	it('should be able to add a contact', function() {
		//冗余代码
		// var addressBook = new AddressBook(),
		// 	thisContact = new Contact();

		addressBook.addContact(thisContact);
		//检查联系人信息是否成功加入(地址簿的第一个人应该与刚加入的联系人相同)
		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	it('should be able to delete a contact', function() {
		// var addressBook = new AddressBook(),
		// 	thisContact = new Contact();

		//向地址簿添加一个联系人以备删除使用
		addressBook.addContact(thisContact);

		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});


describe('Async Address Book', function() {
	var addressBook = new AddressBook();
	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {
			done();
		});
	});
	//用beforeEach外加一个新函数名为done,它能在一步函数运行后将结束信号发给框架

	//要求程序能够抓取初始联系人信息
	it('should grab initial contacts', function(done) {
		//这是异步函数
		// addressBook.getInitialContacts();
		expect(addressBook.initialComplete).toBe(true);
		done();
	});
});