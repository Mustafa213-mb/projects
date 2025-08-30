var arr = [
    { name: "Flower", image: "https://images.unsplash.com/photo-1720372445872-a01f2109e64b?q=80&w=387&auto=format&fit=crop" },
    { name: "leaves", image: "https://plus.unsplash.com/premium_photo-1669842468224-364235e9c9ef?q=80&w=435&auto=format&fit=crop" },
    { name: "nature", image: "https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=870&auto=format&fit=crop" },
    { name: "red mountain", image: "https://images.unsplash.com/photo-1756312853497-1af3172ce02f?q=80&w=869&auto=format&fit=crop" },
    { name: "swans", image: "https://images.unsplash.com/photo-1748382018115-cdcecf7b4b43?q=80&w=870&auto=format&fit=crop" },
    { name: "cloudy mountains", image: "https://plus.unsplash.com/premium_photo-1706625692741-c7e7f5962271?q=80&w=464&auto=format&fit=crop" },
    { name: "street rail", image: "https://images.unsplash.com/photo-1756387346362-044aac6dd5b3?q=80&w=387&auto=format&fit=crop" },
    { name: "street", image: "https://images.unsplash.com/photo-1755771653761-159746c14d8f?q=80&w=387&auto=format&fit=crop" },
    { name: "photo", image: "https://images.unsplash.com/photo-1756417334437-d3467f9e26a8?q=80&w=458&auto=format&fit=crop" },
    { name: "model", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=387&auto=format&fit=crop" },
    { name: "kids", image: "https://plus.unsplash.com/premium_photo-1756220205130-bb76bd277459?q=80&w=387&auto=format&fit=crop" },
    { name: "baloons", image: "https://plus.unsplash.com/premium_photo-1661629473263-572abf51d7c2?q=80&w=871&auto=format&fit=crop" },
    { name: "lion", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=870&auto=format&fit=crop" },
    { name: "rhino", image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=636&auto=format&fit=crop" },
    { name: "giraffe", image: "https://plus.unsplash.com/premium_vector-1722865972668-62b7b74aafb3?q=80&w=774&auto=format&fit=crop" },
    { name: "anime", image: "https://plus.unsplash.com/premium_vector-1689096612167-14df9deb605e?q=80&w=580&auto=format&fit=crop" },
    { name: "anime", image: "https://images.unsplash.com/vector-1745847439146-c0381f39e8c0?q=80&w=484&auto=format&fit=crop" },
    { name: "3dart", image: "https://images.unsplash.com/photo-1754663186489-64d308900779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" },
    { name: "3dart", image: "https://images.unsplash.com/photo-1751517298144-b33449d48e1a?q=80&w=1032&auto=format&fit=crop" },
    { name: "wallpaper", image: "https://images.unsplash.com/photo-1753695115211-12629cb8d4e9?q=80&w=1100&auto=format&fit=crop" },
    { name: "parrot", image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=800&auto=format&fit=crop" },
    { name: "forest", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop" },
    { name: "panda", image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=800&auto=format&fit=crop" },
    { name: "cake", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" },
    { name: "plane", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop" },
    { name: "temple", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop" },
    { name: "dog", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop" },
    { name: "bridge", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop" },
    { name: "market", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop" },
    { name: "castle", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop" },
    { name: "deer", image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop" },
    { name: "car", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop" },
    { name: "ocean", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" },
    { name: "coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" },
    { name: "snow mountain", image: "https://imgs.search.brave.com/h7BM6UBPLZrFWh8-d2ML1sPgNP8vOTXkn6TgiRtbkEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDMwNzk3ODk3MTEt/MTQ4NDcyNDA5YjYz/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UQjhmSE51/YjNkNUpUSXdiVzkx/Ym5SaGFXNThaVzU4/TUh4OE1IeDhmREE9" },
    { name: "burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" },
    { name: "rain", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop" },
    { name: "clouds", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop" },
    { name: "skyscraper", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop" },
    { name: "sunset", image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=800&auto=format&fit=crop" },
    { name: "3d art", image: "https://images.unsplash.com/photo-1739673584260-2236c1c6d37a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" },
    { name: "books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" },
    { name: "ship", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" },
    { name: "giraffe", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=800&auto=format&fit=crop" },
    { name: "ice cream", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop" },
    { name: "galaxy", image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800&auto=format&fit=crop" },
    { name: "elephant", image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop" },
    { name: "bike", image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=800&auto=format&fit=crop" },
    { name: "street food", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop" },
    { name: "city lights", image: "https://imgs.search.brave.com/TIUhxsAzb0StVZdd0XJJ8EtbFgG1c8eFWMaoTRazyQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM5LzkwLzE4/LzM2MF9GXzExMzk5/MDE4MjBfMGRaeWpO/WFpKZjc0S1FFRzl1/eFRycG5WV3pCOExj/b0IuanBn" },
    { name: "zebra", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop" },
    { name: "horse", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop" },
    { name: "pizza", image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop" },
    { name: "tiger", image: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=800&auto=format&fit=crop" },
    { name: "fruits", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=800&auto=format&fit=crop" },
    { name: "Mustafa is Great", image: "https://imgs.search.brave.com/f3djlkb9hcmjYkqwIwYgiVJ3B0gfo0JyuC3IhtIEsAI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5tYWtlYW1lbWUu/b3JnL2NyZWF0ZWQv/eWVzLWktYW0tN2Y5/NDE0Y2QyNi5qcGc" },
    { name: "Mustafa is Great", image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-1eb8-61f5-93c6-a832f1aa90a0/raw?se=2025-08-30T12%3A49%3A51Z&sp=r&sv=2024-08-04&sr=b&scid=ebb602da-a2a7-5162-b881-1601f169e049&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-29T20%3A13%3A59Z&ske=2025-08-30T20%3A13%3A59Z&sks=b&skv=2024-08-04&sig=3KVELUCfvvUHD6EeUaLJoyP0jKnNxSkWxeh9biYpPoQ%3D" }
];

function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container").innerHTML = clutter;
        
}

function handleSearchFunctionality() {
    var input = document.querySelector("#searchinput");

    input.addEventListener("focus", function () {
        document.querySelector(".overlay").style.display = "block";
    });

    input.addEventListener("blur", function () {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".searchdata").style.display = "none";
    });

    input.addEventListener("input", function () {
        const searchValue = input.value.toLowerCase();

        const filteredArray = arr.filter(obj => obj.name.toLowerCase().includes(searchValue));

        var clutter = "";
        filteredArray.forEach(function (obj) {
            clutter += `<div class="res flex px-8 py-3 cursor-pointer">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3> 
            </div>`;
        });
        document.querySelector(".searchdata").style.display = searchValue ? "block" : "none";
        document.querySelector(".searchdata").innerHTML = clutter;

        var galleryClutter = "";
        filteredArray.forEach(function (obj) {
            galleryClutter += `<div class="box">
                <img class="cursor-pointer" src="${obj.image}" alt="${obj.name}">
                <div class="caption">${obj.name}</div>
            </div>`;
        });

        document.querySelector(".container").innerHTML = galleryClutter;


        document.querySelectorAll(".res").forEach(function (resEl) {
            resEl.addEventListener("click", function () {
                input.value = resEl.querySelector("h3").innerText;
                input.dispatchEvent(new Event("input"));
                document.querySelector(".searchdata").style.display = "none";
            });
        });
    });
};

function enableImagePreview() {
    const previewBox = document.getElementById("imagePreview");
    const previewImg = document.getElementById("previewImg");

    document.querySelector(".container").addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            previewImg.src = e.target.src;
            previewBox.classList.remove("hidden");
        }
    });

    previewBox.addEventListener("click", function () {
        previewBox.classList.add("hidden");
        previewImg.src = "";
    });
}





handleSearchFunctionality();
showTheCards();
enableImagePreview();



