import faker from 'faker';

const mount = (mountNode) => {
    let products = '';

    for (let i=0; i< 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    mountNode.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
    //for dev mode
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

export { mount };