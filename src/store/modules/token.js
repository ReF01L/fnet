export default {
    actions: {
        exportToken(ctx, user) {
            window.axios
                .post('http://20.188.3.202:5000/auth/login', user)
                .then(response => {
                    ctx.commit('updateToken', response.data.token);
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                });
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