window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#ce171f'
    });
};

new fullpage('#fullpage', {
    //options here
    anchors: ['main_p', 'plintus_p', 'zvsystem_p', 'dddwall_p', 'prostodveri_p', 'aqua-guard_p', 'contacts_p'],
    autoScrolling: true,
    scrollingSpeed: 700,
    recordHistory: false,
    verticalCentered: false,
    slidesNavigation: true,
    navigation: true,
    navigationPosition: 'left',
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    keyboardScrolling: true,
    animateAnchor: true,
    controlArrows: true,
    lazyLoading: true,
});

$(document).on('click', '#moveTo', function () {
    fullpage_api.moveTo('main_p');
});