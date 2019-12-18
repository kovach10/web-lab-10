let mainArr = [
    {
        firstName: "qwer",
        secondName: "wert",
        surName: "ivanovych",
        craftNumber: 12,
        position: "worker",
        expirience: 34,
        salary: 27000
    },
    {
        firstName: "naruto",
        secondName: "uzumaki",
        surName: "minatovich",
        craftNumber: 1,
        position: "hokage",
        expirience: "6",
        salary: 66000
    },
    {
        firstName: "luffy",
        secondName: "monkey",
        surName: "dragonovich",
        craftNumber: 46,
        position: "yonko",
        expirience: 4,
        salary: 1500000
    }
];

function getAns() {
    let ans;
    let secondName = document.getElementById("input").value;
    mainArr.forEach((elem) => {
        if (elem.secondName == secondName) {
            ans = `craftNumber: ${elem.craftNumber},  position: ${elem.position}, expirience: ${elem.expirience}, salary: ${elem.salary}`;
            //break;
        }
    });
    document.getElementById("answer").innerHTML = ans;
}

