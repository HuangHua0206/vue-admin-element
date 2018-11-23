const module1 = {
	state: {
		demo1: 'huang',
		demo2: 'hua',
		demos: {}
	},
	mutations: {
		EXCHANGE_LANG_FIRST_NAME: (state, firstname) => {
			state.demo1 = firstname
		},
		EXCHANGE_LANG_lAST_NAME: (state, lastname) => {
			state.demo2 = lastname
		}
	}

}

export default module1