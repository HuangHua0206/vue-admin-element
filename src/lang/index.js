import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'  

Vue.use(VueI18n)

const languageMessages = {
	en: {
		...enLocale,
		...elementEnLocale
	},
	zh: {
		...zhLocale,
		...elementZhLocale
	} 
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: process.env.LANGUAGE, // set locale
    messages: languageMessages // set locale messages
})

export default i18n
