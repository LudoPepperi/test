var Transaction = 'Commande B2B';
var Catalog='B2B'
var blocks_config = {
    'free_shipping': {
        text: "Frais de Port Offert",
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
            field: "QuantitiesTotal",
            measure_unit: "\u20ac"
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
        bigImage: true,
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop2%5C%22,%5C%22Value%5C%22:%5C%22Face%20Serums%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22023bad44-a6d3-435b-928d-bab0a41b4dc6%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: '',
    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Hair%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: '',
    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop2%5C%22,%5C%22Value%5C%22:%5C%22Dry%20Shampoo%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: '',
    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop2%5C%22,%5C%22Value%5C%22:%5C%22Co%20Wash%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0',
        img: '',
    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Treatments%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22023bad44-a6d3-435b-928d-bab0a41b4dc6%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0',
        img: '',
    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Treatments%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22023bad44-a6d3-435b-928d-bab0a41b4dc6%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0',
        img: '',
    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Face%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%227142a6f9-af48-4dba-a30d-85d89b2ed083%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%223da50a6c-8a60-4b9c-93f6-a0c83de35072%5C%22%7D%22&TopPadding=0',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop2%5C%22,%5C%22Value%5C%22:%5C%22New%20Arrivals%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22023bad44-a6d3-435b-928d-bab0a41b4dc6%5C%22%7D%22',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop2%5C%22,%5C%22Value%5C%22:%5C%22New%20Arrivals%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%22696718b2-3431-4aad-b23a-8a6d7c824ef0%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%228cf1f19b-9815-40ea-becf-6eced87d910e%5C%22%7D%22&TopPadding=0',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22fcef195d-fcdd-4ce6-b6e7-f506bc92c46c%5C%22%7D%22&TopPadding=0',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Face%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%227142a6f9-af48-4dba-a30d-85d89b2ed083%5C%5C%5C%22%7D%5C%22%7D%22&amp;TopPadding=0',
        img: '',

    },
    {
        link: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22DynamicFilter%5C%22:%5C%22Item.Prop1%5C%22,%5C%22Value%5C%22:%5C%22Masks%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%222a7c613e-1e67-4497-af60-ae8a6633487a%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0',
        img: '',

    }]

//Promotions block
var Promotions = [
    {
        title: "MOANA",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.MainCategory%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22MOANA%20-%20FLEUR%20DE%20TIARE%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/test/MOANA.jpg'
    },
    {
        title: "DELIRIUM FLORAL",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22DynamicFilter%5C%5C%5C%22:%5C%5C%5C%22Item.MainCategory%5C%5C%5C%22,%5C%5C%5C%22Value%5C%5C%5C%22:%5C%5C%5C%22DELIRIUM%20FLORAL%20-%20IRIS%20PATCHOULI%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchString=',
        image: 'https://ludopepperi.github.io/test/delirium floral home.png'
    },
    {
        title: "EAUX DE PARFUM",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="%7B%5C"JsonFilter%5C":%5C"5332e389-e1f9-421e-bc33-689bdfbca16c%5C",%5C"Parent%5C":%5C"%7B%5C%5C%5C"DynamicFilter%5C%5C%5C":%5C%5C%5C"Item.MainCategory%5C%5C%5C",%5C%5C%5C"Value%5C%5C%5C":%5C%5C%5C"EAUX%20DE%20PARFUM%5C%5C%5C"%7D%5C"%7D"&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/test/Présentoir eau parfums.png'
    },
    {
        title: "CR\u00c9MES MAINS",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="%7B%5C"JsonFilter%5C":%5C"5332e389-e1f9-421e-bc33-689bdfbca16c%5C",%5C"Parent%5C":%5C"%7B%5C%5C%5C"DynamicFilter%5C%5C%5C":%5C%5C%5C"Item.MainCategory%5C%5C%5C",%5C%5C%5C"Value%5C%5C%5C":%5C%5C%5C"CROISIERE%20CELANDON%20-%20THE%20VERT%20JASMIN%5C%5C%5C"%7D%5C"%7D"&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/test/P1140485-LIGHT.png'
    }
]

var CaruselData = [
{

    title: '',
    imageURL: 'https://ludopepperi.github.io/test/1.BANNIÈRE.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
{

    title: '',
    imageURL: 'https://ludopepperi.github.io/test/2.BANNIÈRE.png ',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://ludopepperi.github.io/test/3.BANNIÈRE.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://ludopepperi.github.io/test/4.BANNIERE.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
];
customHomepage.test = "test"
