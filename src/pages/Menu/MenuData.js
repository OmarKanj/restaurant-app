require.context('../../images', false, /\.(png|jpe?g|svg)$/)
function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
export const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

console.log(images)

export const MenuItems = [
    {
        image: images['hummus.jpg'],
        name: "Hummus",
        cName: "menu-item",
        alt: images['no-preview.png']
    },
]