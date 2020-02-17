export default {
    methods: {
        /**
         * @param { env } - current working environment
         * Checks the current environment and sets meta tag to noindex if staging
         */
        setRobotsTag (env) {
            if (env === 'development') {
                return 'noindex'
            } else {
                return 'index'
            }
        }
    }
}