var Transaction = 'Commande';
var Catalog='Default Catalog'
var blocks_config = {
    /*'free_shipping': {
        text: "Frais de Port Offert \u00e0 partir de 200\u20ac d'achat",
        field: "",
        svg:"https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'account_balance': {
        text: "Point",
        field: "InternalID",
        measure_unit: "Points",
        svg:"https://storage.pepperi.com/General/Icons/balance.svg"
    },*/
    'active-order':
    {
        name: "Commande en cours",
        buttonText: "Retour Commande",
        table: [{
            text: "Sous-Total",
            field: "SubTotal",
            measure_unit: "\u20ac"
        }, {
            text: "Total Quantit\u00e9",
            field: "QuantitiesTotal"            
        }, {
            text: "Total HT",
            field: "GrandTotal",
            measure_unit: "\u20ac"
        }]
    }
    ,
    'submitted_orders': {
        name: "Derni\u00e9re commande",
        statuses: ["2"],
        table: ["ActionDateTime", "InternalID"]
    }
}
var Brands = [
    {
        text: "COMPOSANTS",
        subtext:"GROUPES",
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Hair%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: ''
    },
    {
        text: "SUSPENSION",
        subtext:"FOURCHES",
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Hair%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: ''
    },
    {
        text: "ROUES & PNEUS",
        subtext:"ROUES",
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Hair%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: ''
    }
]

var SubBrands = [
    {
        text: 'ROUTE',
        submenu: 'GROUPES',
        brands: 'COMPOSANTS',
        link: '',
        img: ''
    },

    ]

//Promotions block
var Promotions = [
       {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%229d9db39a-3f2f-4797-ba7f-bb6abcc71c5f%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=333&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/bell-logo-color.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22b317092d-5abb-451b-b5fc-c76f598816d8%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/cateye-logo.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3618461-f428-42ea-83a5-824f2f45d194%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/camelbak-logo-white.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%2225766859-4b13-450d-b142-43eecc2a6e40%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/giro-logo-white.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22f59a6fcb-cb05-4eb2-b211-1d953130db92%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/pirelli-logo.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%229e7a03da-bec4-4607-8650-6f22e3408f82%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/rockshox-logo.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22957af43d-2d92-4499-8c56-92d0a3abb8fc%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/selle-san-marco-logo-white.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22f0090243-85ee-4f7b-b26a-1cdf0958c125%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/sidi-1.png'
    }
]

var CaruselData = [
{

    title: 'TIME',
    imageURL: 'https://www.royalvelofrance.fr/files/133176/img/10/speciale-8-time.jpg',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="%7B%5C%22JsonFilter%5C%22:%5C%22f552bef6-7805-41a4-8190-d521511d567a%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D"&TopPadding=0&SearchAll=false'
    },
{

    title: 'PIRELLI',
    imageURL: 'https://www.royalvelofrance.fr/files/133176/img/04/fabien-barel-pirelli-episode-2.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22f59a6fcb-cb05-4eb2-b211-1d953130db92%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false'
},
{

    title: 'GIRO',
    imageURL: 'https://www.royalvelofrance.fr/files/133176/img/18/latch-giro.jpg',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink:  'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%2225766859-4b13-450d-b142-43eecc2a6e40%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false'
},
{

    title: 'ALTURA',
    imageURL: 'https://www.royalvelofrance.fr/files/133176/img/18/route-altura.jpg',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22c55a1169-5a4b-462b-8eec-9341bc0184ea%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22cdf580bb-e039-4dae-be88-3534e0d5f2c7%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false'
}
];
customHomepage.test = "test"
