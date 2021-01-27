var Transaction = 'Commande B2B';
var Catalog='B2B'
var blocks_config = {
    'free_shipping': {
        text: "",
        field: "TSAFreeShipping",
        svg:"https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'account_balance': {
        text: "Point",
        field: "TSACreditLimit",
        measure_unit: "Points",
        svg:"https://storage.pepperi.com/General/Icons/balance.svg"
    },
    'active-order':
    {
        name: "Commande en cours",
        table: [{
            text: "Sous-Total",
            field: "SubTotal"
        }, {
            text: "Total Quantite",
            field: "QuantitiesTotal"
        }, {
            text: "Total HT",
            field: "GrandTotal"
        }]
    }
    ,
    'submitted_orders': {
        name: "Derni\u00e9re commande",
        statuses: ["2"],
        table: ["ActionDateTime", "InternalID"]
    }
}
var Brands = []

//Promotions block
var Promotions = [
    {
        title: "MOANA",
        buttonText: "Shop Now",
        deeplink: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="{\"JsonFilter\":\"5332e389-e1f9-421e-bc33-689bdfbca16c\",\"Parent\":\"{\\\"DynamicFilter\\\":\\\"Item.MainCategory\\\",\\\"Value\\\":\\\"MOANA - FLEUR DE TIARE\\\"}\"}"&TopPadding=0&SearchAll=true',
        image: 'https://www.dropbox.com/sh/q633strtdfsizi9/AAB9o_LOF7wV-vtDl-eYxPsXa/1-MOANA/COFFRET%20MOANA.jpeg'
    },
    {
        title: "DELIRIUM FLORAL",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%223da50a6c-8a60-4b9c-93f6-a0c83de35072%5C%22%7D%22&TopPadding=0',
        image: 'https://www.dropbox.com/sh/q633strtdfsizi9/AACr7Ls-j6ASshDixikVE1jNa/2-DELIRIUM%20FLORAL/delirium%20floral%20home.png'
    },
    {
        title: "EAUX DE PARFUM",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Beauty%20%26%20Make%20Up%22%5D%7D%5D',
        image: 'https://www.dropbox.com/sh/q633strtdfsizi9/AABUT0sMXdWioGkMnAB2fFEta/3-EAUX%20DE%20PARFUM/Pr%C3%A9sentoir%20eau%20parfums.tif'
    },
    {
        title: "CR\u00c9MES MAINS",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/3{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Beauty%20%26%20Make%20Up%22%5D%7D%5D',
        image: 'https://www.dropbox.com/sh/q633strtdfsizi9/AAD2eOpASj6seZMUQ7LO2RtYa/4-CR%C3%88MES%20MAINS/P1140485-LIGHT.png'
    }
]

var CaruselData = [
{

    title: '',
    imageURL: 'https://www.dropbox.com/sh/q633strtdfsizi9/AABK9C-vIb5wDf4xfaEBPVrja/5-BANDEAU%20NOUVEAUT%C3%89/5-BANDEAU%20NOUVEAUT%C3%89/1.%20BANNI%C3%88RE.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
{

    title: '',
    imageURL: 'https://www.dropbox.com/sh/q633strtdfsizi9/AACu0u_rPWDxWvj4aXBjz6Sga/5-BANDEAU%20NOUVEAUT%C3%89/5-BANDEAU%20NOUVEAUT%C3%89/2.%20BANNI%C3%88RE.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://www.dropbox.com/sh/q633strtdfsizi9/AACXSfaElNIoq2d4owfuRSx3a/5-BANDEAU%20NOUVEAUT%C3%89/5-BANDEAU%20NOUVEAUT%C3%89/3.BANNI%C3%88RE.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://www.dropbox.com/sh/q633strtdfsizi9/AAADEMucCkoV4HQM1-2Y0vQua/5-BANDEAU%20NOUVEAUT%C3%89/5-BANDEAU%20NOUVEAUT%C3%89/4.%20BANNIERE.png',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
];
customHomepage.test = "test"
