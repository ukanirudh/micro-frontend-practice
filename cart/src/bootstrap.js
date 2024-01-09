import faker from 'faker';

const mount = (mountNode) => {
    const cartText = `<div> You have a ${faker.random.number()} items in your cart</div>`;

    mountNode.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    //for dev mode
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

export { mount };




