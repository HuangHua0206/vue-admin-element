import { 
	EXCHANGE_LANG_FIRST_NAME,
	EXCHANGE_LANG_lAST_NAME,
	ADD_ITEM,
	GET_TEST_LIST
} from 'store/modules/mutation-types'
import { getList } from 'services/test'

const module1 = {
	state: {
		demo1: 'huang',
		demo2: 'hua',
		list: [{
			date: '初始化date',
			name: '初始化name',
			address: '初始化address'
		}],
		dataList: []
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
		},
		[GET_TEST_LIST](state, data) {
			state.dataList = [...data]
		}
	},
	actions: {
		async getTestList({ commit, state }, data) {
			const reslutData = await getList(data)
            commit('GET_TEST_LIST', reslutData.data)
		}
	}

}

export default module1