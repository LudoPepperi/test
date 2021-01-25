var Transaction = 'Sales Order';
var Catalog='Default Catalog'
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
            text: "Total Quantité",
            field: "QuantitiesTotal"
        }, {
            text: "Total HT",
            field: "GrandTotal"
        },]
    },
    'submitted_orders': {
        name: "Dernière commande",
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
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Paul%20Pitchell%22%5D%7D%5D',
        image: ''
    },
    {
        title: "DELIRIUM FLORAL",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%223da50a6c-8a60-4b9c-93f6-a0c83de35072%5C%22%7D%22&TopPadding=0',
        image: ''
    },
    {
        title: "EAUX DE PARFUM",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Beauty%20%26%20Make%20Up%22%5D%7D%5D',
        image: ''
    },
    {
        title: "EAUX DE PARFUM",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Beauty%20%26%20Make%20Up%22%5D%7D%5D',
        image: ''
    },
   
]

var CaruselData = [


{

    title: '',
    imageURL: 'https://uc2be454a4c7f8526de23d72996d.previews.dropboxusercontent.com/p/thumb/ABCRZZCA_70PGGrs5NjIJwpEzGerMA3tx813QIIZKBzIYICiHPyfNSVo-bhQwls8HK7sZFf-LnYxOZOiFWd_Vi7IV-7S-Mtu9_Fqn6ntoNK9mZe_OfqTsoRPSpL6C1YwHSWDnRJVVkCNjUkRU18G8HLZPMceMVsBjIlj6vCBygKy14DBlAW3kHDM2Uf6A23f-rvlHH6sSe_YtWqOlcg61Qn4jGEMq8m3E-vP9YtC8eEFjqX-OH083Fz2x85ZADeeTnMkKI_iPK4wwj2-sOMSx7RhDJ2tz5qTs1Lnog4Noi0FwVqaenzzy7-yxHZPH5SMkAPMs_uAMXkTJGIvnh0A4Q-k5DeirrsfWrjZ5UHc1aSWFQ/p.png?size=178x178&size_mode=1',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
{

    title: '',
    imageURL: 'https://ucd67453f8435fd24a9ba3b0200b.previews.dropboxusercontent.com/p/thumb/ABAgMj3PklNSVi69-Yia4br2mL7DCupdFtnhmh6SPIOW9Orf11_FtAF2EhuRcifk_uNFQ8fE3_tbHzpMHEeFwG4dH_s8ixTGh1qwWJ0Z1wtm_9TGVNMp_xJVwOySlwwuCZ93lic9hZiwA1LraRhyU-sjIPjnMti7at65Ak-SBlMhy6eFhT5DmKks9cuDQywAHoTvhElPI60IZcTsC1tgAe4zo75UIxcznuZ_jSdXEoOhe5KmgTg8GpThQtk2TNNrdctytfSFLhC04H-o7flANFyfEhRG2M_4mRi2fV_h2Stu-lO-oCnCfISwNIF0b3BduA1uyXwSJl3vrqE4NILkLdK5wsVG0oa1H4KHcTq22vS56A/p.png?size=178x178&size_mode=1',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://www.dropbox.com/sh/q633strtdfsizi9/AACXSfaElNIoq2d4owfuRSx3a/5-BANDEAU%20NOUVEAUT%C3%89/5-BANDEAU%20NOUVEAUT%C3%89/3.BANNI%C3%88RE.png?dl=0',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://uc5b10bb0460d0257e759f9de15e.previews.dropboxusercontent.com/p/thumb/ABAyMPM5uw3_q2qP7LXlgoSeRBBMTTbG3yW1hQPHVu8RSR8cdkZlZX7Tzfwz9Pca7lTRf_PKOLJ389KzGKFgsfvbGJGZRYdtR1_DP9M748vW_fSPNTSpvcfQdVq_MUCMMgSWFxCPLM_QYAOLlouY2rwBhnOXu7g6Yj3xiySl1_9jwDA2SSP7aDXYUgumEx6pQ2LZwKO21SkSia5iO93W1M1ASi4cJU-OvHJca_NPJmCBYh9_rPNVd1NDm8zyKbbcAtZkUt44aA0ZB41SVmJCWEjazKeBhJIxKnbgz_t4p1T1nUzHBTIvuaGMhKvHzQL-0aEJq5Ohxqtz_jpJ1kZN1J8RFuq_ezmobIVc6cjtP2mCtw/p.png?size=178x178&size_mode=1',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
];
customHomepage.test = "test"
