import { 
	EXCHANGE_LANG_FIRST_NAME,
	EXCHANGE_LANG_lAST_NAME,
	ADD_ITEM
} from 'store/modules/mutation-types'

const module1 = {
	state: {
		demo1: 'huang',
		demo2: 'hua',
		list: [{
			date: '初始化date',
			name: '初始化name',
			address: '初始化address'
		}]
	},
	mutations: {
		[EXCHANGE_LANG_FIRST_NAME](state, firstname) {
			state.demo1 = firstname
		},
		[EXCHANGE_LANG_lAST_NAME](state, lastname) {
			state.demo2 = lastname
		},
		[ADD_ITEM](state, item) {
			state.list = [...state.list, item]
		}
	},
	actions: {}

}

export default module1