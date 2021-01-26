var Transaction = 'Sales Order';
var Catalog='Default Catalog';
var blocks_config = {
    'free_shipping': {
        text: "",
        field: "TSAFreeShipping",
        svg:"https://storage.pepperi.com/General/Icons/truck.svg",
    },
    'account_balance': {
        text: "Point",
        field: "TSACreditLimit",
        measure_unit: "Points",
        svg:"https://storage.pepperi.com/General/Icons/balance.svg",
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
    },
}
var Brands = []
//Promotions block
var Promotions = [
    {
        title: "MOANA",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/3a8a9fbfb3c644bf9cc37958c3678880?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Paul%20Pitchell%22%5D%7D%5D',
        image: 'https://uca20d97102c9811d05719a6e403.previews.dropboxusercontent.com/p/thumb/ABB6K9WuXk55WMP8YgeCGDyakewQ3OQTVCnyqdV5eW1Vy7OB6CqsCaE6l6ZOlNIelI6BpkA-RUPsCB1vt2dWSwO688EOsjnTQ6WUP0EfJ768uqC7FAYVEVYCVl3CFy7RQfp3JtaOh6V8f4tSh5qQdHqBpeIQYASfW312mc1_16OGnSbYnHhv1xdUpB2X3y1MAVJaRnr6euNf-gbykoY5po2YYkDQmIpNxd2rL4HllkmRJ3UjUic0OoR_xNlEyqP7b455RyYAuXaAc8OwgjicXrGHWZ8XTDBmi9UNRxfqRpQ15KrAL2z2hISq8R3RppBeDD4N2lYx9mLAc4T41wXhQhoH07HiyxWKDbsNy3QPUnnbIQ/p.jpeg?fv_content=true&size_mode=5'
    }, 
    {
        title: "DELIRIUM FLORAL",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/3a8a9fbfb3c644bf9cc37958c3678880?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%223da50a6c-8a60-4b9c-93f6-a0c83de35072%5C%22%7D%22&TopPadding=0',
        image: 'https://uce6ee4a0ff91b6e52cdf4f4f028.previews.dropboxusercontent.com/p/thumb/ABDS_JOdNT2_aNfP3PLvesxwtV5AvRvtrrcbgxuFdHQ3gu79LHuh5k2tIHZ_o7-MV-Kc3kS9FAY8_hzxtS6ROivOZf1p7Mzi7qcTN5pDxiM4x1GJ8k2Ws4h_OySo3dgp_wiSti9jDAfY3kND3S6LWXATgGx2QvYjmDASdpBCbqml8xMszcLXx7JPk7gQtQ3RRX4fuszr40n2nzGtpBwGLJck03s7L5TYJh0Bdvj5-KKXfrCvcyrQMLC8ttJ8e9YkBGlfnqXRtwnO3YU1YlJ51hAXRXVZJ0_MGXwRn-jKtkeJZV4vmhDNA_Q9Hl4nVlv2po4Z8S83cl_Fb6l8W2Kz5g1erVeVuR6cghi84fKGvbBFug/p.png?fv_content=true&size_mode=5'
    },
    {
        title: "EAUX DE PARFUM",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/3a8a9fbfb3c644bf9cc37958c3678880?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Beauty%20%26%20Make%20Up%22%5D%7D%5D',
        image: 'https://uc5f4fec40d5f1cfd6c5466fa1e4.previews.dropboxusercontent.com/p/thumb/ABD9VDyTw5t-6Z29MrXg5TJdUMyUdAgFv4OFe8QLnz6cNT3bWKeN07YhY9PUfy2-oYk2Y0sE1did3mD_pbhrbYMKbgQ3Dp-rzjuYax1tJDgq--9W_eoWPIcbCS2MHEcshc6TF4dUChg3mGDKgJjAFOk1fHdcj_Buk5fIrAsojTCQLo82JzcF8cpk8OEEYGfSsxfkFMIZ1bcWfaucmxXkCBz9dBHqR3J1oYKU0Jqgz9xVuDoMV9PSmr1qa0K2f4FMVD5g_RCSTRXC9Kkw6aXnhMyC4sj-CcYGerUdiuhcdSe7tyscIZV1WrriiLWFVic5hNaePd2UFw5SpkhmEZlC8QUmd3ekhwNu6JrRCtuVCodPoKERaZf59ST_Jr13UhIGopU6WM_XEBZL4IcKk6zdpH6Non73FHAr03g2fwbsK5RtYJdaHWAhBgF9vyopUMbOQ6Kkm9vakCCxsQTN8xeLJz0R/p?fv_content=true&size_mode=5'
    },
    {
        title: "CRÈMES MAINS",
        buttonText: "Shop Now",
        link: 'Transactions/scope_items/3a8a9fbfb3c644bf9cc37958c3678880?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22e3c559be-8581-4313-9095-cb5c113c3564%5C%22%7D%22&TopPadding=0&SmartSearch=%5B%7B%22ApiName%22:%22ItemMainCategory%22,%22ComparisonType%22:%22Values%22,%22Values%22:%5B%22Beauty%20%26%20Make%20Up%22%5D%7D%5D',
        image: 'https://ucc4cf31bc4d63e67b490f984181.previews.dropboxusercontent.com/p/thumb/ABC6IChg3PiaPt7VfESvFCeKBkCUjOahrxQwUaR1dmTByRPL61V175UqS50SFLlVtjXRJGQ07GpcGOZME-4Zh0P0h7NHEyaRxkKgr6Zp1deA7DkkoovmiynUi8ptBJc6sdyvXTGFUzYngFPPk1U2i51vS7hnzBYp14hh2m7N-AsHq4cgLY1NYRiLgA_OpBwlQi55KVxCR6U6seI6ztrDXOxLgJ15z0JOa5Q3qCjJsQ_CsSRWceygTyqfUJkIazioCWbgdwzhZlW9L-MsNXMEYbc4rF6TrmEkwOTBuHFTMfn4Qdm6IkZKbFur1avidPRgsgqRXzA87iTMscPh6eBkRr1PZiUQJpOVIwljHEVG2q1Fs3rdYRROWJ4hjYtRYAcBi3eR69lv5OklhkbOdi4rNEcI8sqfa2Qf8WJGUTV6TfIxEYT0djvDswGowZYusduwZx7acGDDMIHMDoi0w57L9KoEhh2HiMaIoKTa4ccC5e_Aqg/p.png?size=2048x1536&size_mode=3'
    },
]

var CaruselData = [


{

    title: '',
    imageURL: 'https://uc1f99616d1354e821f8fad8685a.previews.dropboxusercontent.com/p/thumb/ABDry4E4zFYZVNpS1T_e2Oi0PhOFXfnieRFYYAdQRbu8RWWHr0cJADYGzMyalPqjD323XNBXAXAOx5AfqKlr5tZsNLKG_iESgKtc6bGmtyzQm2Jeob3dF9sJqWg19xE-aj3TwqJfvpapXQ7chGZqLaamQZxlk_40nem5NqqsWIRL-KKXsIV59gZfWIXQt6Xee7QKDkchxsVTJ9LJUoZ9F0bUvtD7sc2FQdO_U3sodcInnLfmCWzycM61xdc4b5WWbWKwjtZmgWkQNN9nqW2SnOXDJyNQEuiSiCW5BvqVQ1Tvw5d_YVvPeF4BtCeXHAIwPvdMXlt13FozDAmt25Y9wBjNfGyJl_ph0s0AZIYFW3GZ0Q/p.png?fv_content=true&size_mode=5',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/3a8a9fbfb3c644bf9cc37958c3678880?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
{

    title: '',
    imageURL: 'https://uc75018b652322b31661c2ce6efd.previews.dropboxusercontent.com/p/thumb/ABDocty1p98KFkx7ie1eySHKKirO2BMyr4KpbUMZ9e007_C4JvOBXE74ql4vzYWUbAIwfX2PAEpfUQQgAVbeQ6zbwmD7Jea6o03Kgu7gg2vh7I8ilLkiCY9UMOTMFHPSujeP5dEjEmDnaObx2sx9ulG6-FzxugLF820TSr5ePdL6r5UmzD-nfuKIjNnSK1ProzX9IIdLi_wpdAZqvDEt9OKlthdKlsPM0my8hxxGDjF27G1M5K8_2O2tgR7UbzXghljZuSj6kMlZSwwKD6iXffgjnT7JzMXKXOYlVVk9bKejpExMq_fquKI9XopfPuNlsZDh5r_KupdjKF9MIWBasZVPMcOlIZZ1r9HOkix1aErPmw/p.png?fv_content=true&size_mode=5',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/3a8a9fbfb3c644bf9cc37958c3678880?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://uc729653f1aa38210bd7b4b1e9fe.previews.dropboxusercontent.com/p/thumb/ABAzehTyUZZ91sst3iGbU5huiFKZX0R4QD3IKgZKtpBdgUpvy43-2TQ7i5Zg2k0ZNqCT8GszHlhOEHqVN6QeW_HhM3ZikDAubYG1hFccjDH9Re_fudbTUwbzSSXOM1L_LollE20nIHwzyF10Vorn52KdBbDwpqr9NDBN-OfLto46bt0152Z2p1BSjAm-KrmOjGvvKCBHRQTT1p6NbW6b799gThht2mmYsWG4M98EBrdnVH7w_Wsk5PB9WdDwm3Hp78Fkc-BrAqRqUbM5H_AbtceQQ1tr705hm-bNP85yjxaDw_iOh4-9XwqdpIvwKBWYI8qfZPZTW39-RlBtgErRi5GddoChXlLYAs80CVnZjNJnkg/p.png?fv_content=true&size_mode=5',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/3a8a9fbfb3c644bf9cc37958c3678880?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
{

    title: '',
    imageURL: 'https://uc714823f110363c1a6847de804d.previews.dropboxusercontent.com/p/thumb/ABChHba2HWZ7b2kY-Wae5oLxl_PRYWtsqGxsXn4GVFsg3uiDYZvLW2CuMGqehioK1Z59RBKpEKhjym9uVclc7NZDPUKNtvFxq_yAekMgVDDs0BNA_JqkMtDsW8MkAg0q_UDao5ZVEi0UO7FqpXz-KjGJ9UbgaP5qExCGRAVx3-6bfKxv0fa4lnAhDnnGySP4IuZ7jn39bs_Q5lgvrG6y4pBxRlUj5nxILb3ZQbCRMp5xeOkh-7Jx5SofQi01GmU9NywK6oXmYvNyBa7HdtnNetmvsFv83PiCmuUAWzgiBA7atc3palQwNzflJRaLW3CzVA4zN2P3k6gNzKfTMywgRBehVh1kaVAvHKAMjofi8oiZ5g/p.png?fv_content=true&size_mode=5',
    description: '',
    buttonText: '',
    time: 5000,
    deepLink: '/Transactions/scope_items/3f26ad66-86f7-4661-bd86-6f9c35e684d6?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
},
];
customHomepage.test = "test"
