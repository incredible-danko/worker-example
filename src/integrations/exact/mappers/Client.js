module.exports = Common.Utils.Mapper([
	{ src: 'name', dest: 'name', default: 'Unknown' },
	{ src: 'orgnum', dest: 'info.orgNumber' },
	{ src: 'vatnumber', dest: 'info.vatNumber' },
	{ src: 'termsOfPayment', dest: 'info.termsOfPayment', default: '30' },
	{ src: 'bank', dest: 'info.accounts[0].bank' },
	{ src: 'bank account number', dest: 'info.accounts[0].bankAccountNumber' },
	{ src: 'bank clearing number', dest: 'info.accounts[0].clearingNumber' },
	{ src: 'bank giro', dest: 'info.accounts[0].BG' },
	{ src: 'plus giro', dest: 'info.accounts[0].PG' },
	{ src: 'bic', dest: 'info.accounts[0].bic' },
	{ src: 'iban', dest: 'info.accounts[0].iban' },
	{ src: 'contact internal name', dest: 'contact.internal.name' },
	{ src: 'contact internal email', dest: 'contact.internal.email' },
	{ src: 'contact internal phone', dest: 'contact.internal.phone' },
	{ src: 'contact name', dest: 'contact.general.name' },
	{ src: 'contact email', dest: 'contact.general.email' },
	{ src: 'contact street', dest: 'contact.general.street' },
	{ src: 'contact street 2', dest: 'contact.general.street2' },
	{ src: 'contact city', dest: 'contact.general.city' },
	{ src: 'contact zipcode', dest: 'contact.general.zipcode' },
	{ src: 'contact phone', dest: 'contact.general.phone' },
	{ src: 'contact country', dest: 'contact.general.country' },
	{ src: 'shipping name', dest: 'contact.shipping.name' },
	{ src: 'shipping email', dest: 'contact.shipping.email' },
	{ src: 'shipping street', dest: 'contact.shipping.street' },
	{ src: 'shipping street 2', dest: 'contact.shipping.street2' },
	{ src: 'shipping city', dest: 'contact.shipping.city' },
	{ src: 'shipping zipcode', dest: 'contact.shipping.zipcode' },
	{ src: 'shipping phone', dest: 'contact.shipping.phone' },
	{ src: 'shipping country', dest: 'contact.shipping.country' },
]);
