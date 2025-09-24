import {createApp} from "./vue.esm-browser.js";

const app = createApp({
    // data: all the data for the app
    data: function () {
        return {
            //name: "Hector",

            productsList: [
                {
                    idProduct: 0,
                    nameProduct: 'The First Berserker: Khazan',
                    mainPrice: 59.99,
                    soldPrice: 37.79,
                    discount: 37,
                    endOffer: 'September 29',
                    mainPicture: 'pictures/product01/mainPict00.jpg',
                    thumbnail01: 'pictures/product01/th01.jpg',
                    thumbnail02: 'pictures/product01/th02.jpg',
                    thumbnail03: 'pictures/product01/th03.jpg',
                    thumbnail04: 'pictures/product01/th04.jpg',
                    thumbnail05: 'pictures/product01/th05.jpg',
                    thumbnail06: 'pictures/product01/th06.jpg',
                    logoPicture: 'pictures/product01/logoMain00.png',
                    publisher: 'NEOWIZ',
                    developer: 'Lizard Smoothie',
                    sourceP: 'NEOWIZ',
                    genres: 'Action, Adventure, Indie, RPG',
                    platform: 'PC',
                    released: 'Thursday, September 11, 2025',
                    sLanguages: 'English, French, German, Italian, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Spanish, Spanish-Latin America, Traditional Chinese, Turkish',
                    systemMin:'Windows 10 (64-bit)Windows 10 (64-bit)',
                    systemRec:'Windows 10 (64-bit) or higher',
                    processorMin:'Intel Core i5-4690 / AMD FX 4350',
                    processorRec:'Intel Core i5-7600K / AMD Ryzen 5 1600X',
                    memoryMin:'8 GB RAM',
                    memoryRec:'16 GB RAM',
                    graphicsMin:'NVIDIA GeForce GTX 780 / AMD Radeon R9 280X',
                    graphicsRec:'NVIDIA GeForce GTX 1660/1060 / AMD Radeon RX 580 AMD | For Ray Tracing: GeForce RTX 2060',
                    directXMin:'Version 11',
                    directXRec:'Version 12',
                    storageMin:'42 GB available space',
                    storageRec:'42 GB available space',
                    sortDescription: "The First Berserker: Khazan is a hardcore action role-playing game. The player will become Khazan, the great general of the Pell Los Empire, who overcame death, and sets out to reveal the incidents that led to his downfall and seek vengeance on his enemies.",
                    longDescription: "Experience the brutal action of The First Berserker: Khazan, a hardcore Action RPG adventure set 800 years before the events of the Dungeon Fighter Online (DNF) Universe. You will experience the vast universe and journey to the continent of Arad and discover the untold story of General Khazan. Master deep and immersive combat mechanics while you engage in strategic battles against a diverse array of foes and bosses. Will you embrace the path of the First Berserker and embark on Khazan\'s path of revenge? THE FIRST BERSERKER The Great General Khazan is falsely branded a traitor and mercilessly tortured. After narrowly escaping death, Khazan forms an unlikely alliance with the ghostly entity Blade Phantom, gaining otherworldly powers. Witness Khazan's journey for revenge and learn his path to becoming the first berserker in the DNF Universe.",
                },
                {
                    idProduct: 1,
                    nameProduct: 'Hades',
                    mainPrice: 24.99,
                    soldPrice: 6.24,
                    discount: 75,
                    mainPicture: 'pictures/product02/mainPict01.jpg',
                    endOffer: 'WEEKEND DEAL!',
                    sortDescription: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
                    longDescription: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre. As the immortal Prince of the Underworld, you'll wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unraveling more of the story with each unique escape attempt. UNLEASH THE FURY OF OLYMPUS. The Olympians have your back! Meet Zeus, Athena, Poseidon, and many more, and choose from their dozens of powerful Boons that enhance your abilities. There are thousands of viable character builds to discover as you go.",
                    logoPicture: 'pictures/product02/logoMain01.png',
                    publisher: 'Supergiant Games',
                    developer: 'Supergiant Games',
                    sourceP: 'Supergiant Games',
                    genres: 'Action, Indie, RPG',
                    platform: 'PC',
                    released: 'Sep 17, 2020',
                    sLanguages: 'English, French, German, Italian, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Spanish, Spanish-Latin America, Traditional Chinese, Turkish',

                },
                {
                    idProduct: 3,
                    nameProduct: 'Clair Obscur: Expedition 33',
                    mainPrice: 59.99,
                    soldPrice: 53.99,
                    discount: 10,
                    mainPicture: 'pictures/product03/mainPict02.jpg',
                    endOffer: 'September 29',
                    sortDescription: "Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.",
                    longDescription:"Once a year, the Paintress wakes and paints upon her monolith. Paints her cursed number. And everyone past that age turns to smoke and fades away. Year by year, that number ticks down and more of us are erased. Tomorrow she’ll wake and paint “33.” And tomorrow we depart on our final mission - Destroy the Paintress, so she can never paint death again. We are Expedition 33. Clair Obscur: Expedition 33 is a ground-breaking turn-based RPG with unique real-time mechanics, making battles more immersive and addictive than ever. Explore a fantasy world inspired by Belle Époque France in which you battle devastating enemies.",
                    logoPicture: 'pictures/product03/logoMain02.png',
                    publisher: 'Supergiant Games',
                    developer: 'Supergiant Games',
                    sourceP: 'Supergiant Games',
                    genres: 'Action, Indie, RPG',
                    platform: 'PC',
                    released: 'Sep 17, 2020',
                    sLanguages: 'English, French, German, Italian, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Spanish, Spanish-Latin America, Traditional Chinese, Turkish',

                },
            ],
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        getItemById(id) {
            return this.productsList.find(item => item.idProduct === id);
        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {},

    //mounted:  called after the instance has been mounted,
    mounted: function () {},

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {},
});

export default app;
