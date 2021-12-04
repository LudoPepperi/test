var Transaction = 'Sales Order';
var Catalog='Default Catalog'
var blocks_config = {
    'free_shipping': {
        text: "Frais de Port Offert \u00e0 partir de 200\u20ac d'achat",
        field: "",
        svg:"https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'account_balance': {
        text: "Point",
        field: "InternalID",
        measure_unit: "Points",
        svg:"https://storage.pepperi.com/General/Icons/balance.svg"
    },
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
        subtext:[{"ROUES"},{"PNEUS"}],
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
        title: "BELL",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.MainCategory%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22MOANA%20-%20FLEUR%20DE%20TIARE%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/bell-logo-color.png'
    },
    {
        title: "CATEYE",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.MainCategory%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22DELIRIUM%20FLORAL%20-%20IRIS%20PATCHOULI%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchString=',
        image: 'https://ludopepperi.github.io/RVF/cateye-logo.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="{\"JsonFilter\":\"5332e389-e1f9-421e-bc33-689bdfbca16c\",\"Parent\":\"{\\\"DynamicFilter\\\":\\\"Item.MainCategory\\\",\\\"Value\\\":\\\"EAUX DE PARFUM\\\"}\"}"&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/camelbak-logo-white.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="{\"JsonFilter\":\"5332e389-e1f9-421e-bc33-689bdfbca16c\",\"Parent\":\"{\\\"DynamicFilter\\\":\\\"Item.MainCategory\\\",\\\"Value\\\":\\\"CROISIERE CELANDON - THE VERT JASMIN\\\"}\"}"&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/giro-logo-white.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.MainCategory%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22MOANA%20-%20FLEUR%20DE%20TIARE%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/pirelli-logo.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.MainCategory%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22DELIRIUM%20FLORAL%20-%20IRIS%20PATCHOULI%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchString=',
        image: 'https://ludopepperi.github.io/RVF/rockshox-logo.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="{\"JsonFilter\":\"5332e389-e1f9-421e-bc33-689bdfbca16c\",\"Parent\":\"{\\\"DynamicFilter\\\":\\\"Item.MainCategory\\\",\\\"Value\\\":\\\"EAUX DE PARFUM\\\"}\"}"&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/RVF/selle-san-marco-logo-white.png'
    },
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="{\"JsonFilter\":\"5332e389-e1f9-421e-bc33-689bdfbca16c\",\"Parent\":\"{\\\"DynamicFilter\\\":\\\"Item.MainCategory\\\",\\\"Value\\\":\\\"CROISIERE CELANDON - THE VERT JASMIN\\\"}\"}"&TopPadding=0&SearchAll=false',
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
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
{

    title: 'PIRELLI',
    imageURL: 'https://www.royalvelofrance.fr/files/133176/img/04/fabien-barel-pirelli-episode-2.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: 'GIRO',
    imageURL: 'https://www.royalvelofrance.fr/files/133176/img/18/latch-giro.jpg',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: 'ALTURA',
    imageURL: 'https://www.royalvelofrance.fr/files/133176/img/18/route-altura.jpg',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
}
];
customHomepage.test = "test"
