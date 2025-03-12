const wardrobe = {
    facial: ['have mustache', 'have beard','be clean shaved'],
    color: ['orange', 'grey', 'blue', 'green', 'white'],
    shirt: ['flannel', 'Samsung t-shirt', 'dress shirt'],
    pant: ['jeans', 'khaki', 'dress pant'],
    shoes: ['sneaker', 'slippers', 'dress shoes', 'thick sole shoes']
}

function randomIndexGenerator(num) {
    return Math.floor(Math.random() * num)
}

let ootd = [];

for (let type in wardrobe){
    let option = randomIndexGenerator(wardrobe[type].length);

    switch(type){
        case 'facial': 
            ootd.push(`Today, Brandon will ${wardrobe[type][option]},`)
            break;
        case 'color': 
            ootd.push(`wearing a ${wardrobe[type][option]}`)
            break;
        case 'shirt': 
            ootd.push(`${wardrobe[type][option]},`)
            break;
        case 'pant': 
            ootd.push(` ${wardrobe[type][option]}`)
            break;
        case 'shoes': 
            ootd.push(`and a pair of ${wardrobe[type][option]}`)
            break;
        default:
            ootd.push('Something is missing...')
    }
}

function dailyStyle(style){
    const result = ootd.join(' ');
    console.log(result);
}

dailyStyle(ootd);