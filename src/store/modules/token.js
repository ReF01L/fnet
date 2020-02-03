export default {
    actions: {
        exportToken(ctx, user) {
            let tmp;
            window.axios
                .post('http://20.188.3.202:5000/auth/login', user)
                .then(response => {
                    tmp = response.data.token
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                });
            ctx.commit('updateToken', tmp);
        }
    },
    mutations: {
        updateToken(state, token) {
            state.token = token;
        }
    },
    state: {
        token: String
    },
    getters: {
        getToken(state) {
            return state.token;
        }
    },
}