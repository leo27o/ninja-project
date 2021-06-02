// const select = document.getElementById("drapeaux-tricolors");

// const test = () => {
//     console.log(select.options[select.selectedIndex].innerHTML);
// }

const ninjas = {
    leo:{
        name: "leo",
        age: 17,
        village: "konoha",
        jutsu: "katon",
        dojutsu: "rinnegan",
        imgUrl: "https://otakukart.com/wp-content/uploads/2021/04/Demon-Slayer-Kyojuro-Rengoku.jpg"
    },
    wins:{
        name: "wins",
        age: 30,
        village: "konoha",
        jutsu: "fuuton",
        dojutsu: "byakugan",
        imgUrl: "naruto.jpg"
    },
    tanjiro:{
        name: "kakashi",
        age: 45,
        village: "konoha",
        jutsu: "raiton",
        dojutsu: "sharingan",
        imgUrl: "kakashi.jpg"
    }
}

const displayNinjas = () => {

    const containerCards = document.getElementById("containerCards");

    containerCards.innerHTML = "";

    for(let ninja in ninjas){
        const card = document.createElement("div");
        card.setAttribute ("id", "card");

        
        const containerImg = document.createElement("div");
        containerImg.setAttribute ("id", "containerImg");

        const img = document.createElement("img");
        img.setAttribute ("id", "img");
        img.setAttribute ("src", `${ninjas[ninja].imgUrl}`);

        containerImg.appendChild(img);

        const containerInfos = document.createElement("div");
        containerInfos.setAttribute ("id", "containerInfos");

        const name = document.createElement("p");
        name.innerHTML = `Nom: ${ninjas[ninja].name}`;

        const age = document.createElement("p");
        age.innerHTML = `Age: ${ninjas[ninja].age}`;

        const village = document.createElement("p");
        village.innerHTML = `Village: ${ninjas[ninja].village}`;

        const jutsu = document.createElement("p");
        jutsu.innerHTML = `Jutsu: ${ninjas[ninja].jutsu}`;

        const dodjutsu = document.createElement("p");
        dodjutsu.innerHTML = `Dodjutsu: ${ninjas[ninja].dojutsu}`;

        containerInfos.append(name, age, village, jutsu, dodjutsu);

        card.append(containerImg, containerInfos);

        containerCards.appendChild(card);

        card.addEventListener("mouseover", () => {
            card.style.width = "325px";
            card.style.height = "475px";
            img.style.width = "325px";
            img.style.height = "225px";
            card.style.margin = "0px"
        })

        card.addEventListener("mouseout", () => {
            card.style.width = "300px";
            card.style.height = "450px";
            img.style.width = "300px";
            img.style.height = "200px";
            card.style.margin = "10px"
        })

    }
}

 const addNinja = (event) => {
    event.preventDefault();

    const inputName = document.getElementById("inputName").value;
    console.log (inputName);

    const inputAge = document.getElementById("inputAge").value;
    console.log (inputAge);

    const inputVillage = document.getElementById("inputVillage").value;
    console.log (inputVillage);

    const inputJutsu = document.getElementById("inputJutsu").value;
    console.log (inputJutsu);

    const inputDojutsu = document.getElementById("inputDojutsu").value;
    console.log (inputDojutsu);

    const inputImage = document.getElementById("inputImage").value;
    console.log (inputImage);

    Object.assign(ninjas, {[inputName]:{
        name: inputName, 
        age: inputAge,
        village: inputVillage,
        jutsu: inputJutsu,
        dojutsu: inputDojutsu,
        imgUrl: inputImage
    }})

    console.log(ninjas);

    displayNinjas();
 }

 const button = document.getElementById("button");

 button.addEventListener("click", addNinja);

 displayNinjas();

 
