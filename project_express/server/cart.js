let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};
let erase = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    console.log(cart);
    console.log(find);
    if (find.quantity > 1) {
        find.quantity -= req.body.quantity;
    } else {        
        const index = cart.contents.findIndex(n => n === find);             
        cart.contents.splice(index, 1);
        return JSON.stringify(cart, null, 4);
    }
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    erase
};