import DefaultTheme from 'vitepress/theme'
import Comments from '../components/Comments.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('Comments', Comments)
    }
}