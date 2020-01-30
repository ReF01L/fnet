export const footerScrollUpdate = {
    scroll: function (event) {
        let delta = 0
        if (!event) event = window.event

        if (event.wheelDelta) {
            delta = event.wheelDelta / 120
        } else if (event.detail) {
            delta -= event.detail / 3
        }

        if (delta) {
            let footerBar = document.querySelector('.list')
            footerBar.style.transition = '0.6s'
            if (delta > 0) {
                // Up
                footerBar.style.transitionDelay = '0.2s'
                footerBar.style.transform = 'translateY(0)'
            } else {
                // Down
                footerBar.style.transitionDelay = '0.6s'
                footerBar.style.transform = 'translateY(200%)'
            }
        }
    }
}