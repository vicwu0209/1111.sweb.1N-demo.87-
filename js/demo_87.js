function change(index) {

const p = document.querySelector('.show-classdemo');
console.log('p', p);

switch(index) {
    case 1:
        p.innerHTML = `<iframe src="./demo/w01_87/index.html" width="100%" height="100%" />`
        break;
    case 2:
        p.innerHTML = `<iframe src="./demo/w02_87/card_87.html" width="100%" height="100%" />`
        break;
    case 3:
        p.innerHTML = `<iframe src="./demo/w04_87/blog_87.html" width="100%" height="100%" />`
        break;
    case 4:
        p.innerHTML = `<iframe src="./demo/w06_87/blog_87.html" width="100%" height="100%" />`
        break;
    case 5:
        p.innerHTML = `<iframe src="./demo/w08_87/quiz1_11.html" width="100%" height="100%" />`
        break;
    case 6:
        p.innerHTML = `<iframe src="./demo/w09_87/multipage_87.html" width="100%" height="100%" />`
        break;
    case 7:
        p.innerHTML = `<iframe src="./demo/w11_87_midtem/p4_87/p4_87.html" width="100%" height="100%" />`
        break;
    case 8:
        p.innerHTML = `<iframe src="./demo/w12_87_portfolio/portfolio/index.html" width="100%" height="100%" />`
        break;
    case 9:
        p.innerHTML = `<iframe src="./demo/w13_87_portfolio/portfolio/index.html" width="100%" height="100%" />`
        break;
    case 10:
        p.innerHTML = `<iframe src="./demo/w14_87_portfolio/portfolio/index.html" width="100%" height="100%" />`
        break;
    case 11:
        p.innerHTML = `<iframe src="./demo/w15_87_portfolio/portfolio/index.html" width="100%" height="100%" />`
        break;
    case 12:
        p.innerHTML = `<iframe src="./demo/w16_87_portfolio/portfolio/index.html" width="100%" height="100%" />`
        break;
    case 13:
        p.innerHTML = `<iframe src="./works_87.html" width="100%" height="100%" />`
        break;
    case 14:
        p.innerHTML = `<iframe src="./resume_87.html" width="100%" height="100%" />`
        break;
    case 15:
        p.innerHTML = `<iframe src="./learning_87.html" width="100%" height="100%" />`
        break;

    }
}

const navbar = document.querySelector('#navbar')

window.addEventListener('scroll', function () {

    if (this.window.pageYOffset > 100) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
})