const items = document.querySelectorAll('#timeline li');

// viewport dotor bnu gvyu gdgiin hiijn ogjiin.
const isInViewPort = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// herew tuhain viewportdo bawal show classig nemj ogjin.
const run = () =>
    items.forEach(item => {
        if (isInViewPort(item))
            item.classList.add('show');
    });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);


// delgetsnd haragdhal ym bol show gdg clas nemj ogh.