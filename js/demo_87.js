function change(index) {

const p = document.querySelector('.show-classdemo');
console.log('p', p);

switch(index) {
    case 1:
        p.innerHTML = `<iframe src="./demo/w01_87/index.html" width="100%" height="100%" />`
        break;
    case 2:
        p.innerHTML = `<iframe src="./demo/w02_87/card_11.html" width="100%" height="100%" />`
        break;
    case 3:
        p.innerHTML = `<iframe src="./demo/w04_87/blog_11.html" width="100%" height="100%" />`
        break;
    case 4:
        p.innerHTML = `<iframe src="./demo/w06_87/blog_11.html" width="100%" height="100%" />`
        break;
}

}