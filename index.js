const form = document.querySelector("form");
const input = form.getElementsByTagName("input");
const card = document.querySelector(".Card");


const userFirstName = prompt("Enter your First Name :");
if (userFirstName !== null && userFirstName.trim() !== "") {

    const userLastName = prompt("Enter your Last Name :");
    if (userLastName !== null && userLastName.trim() !== "") {

        const country = prompt("Enter your Country :");
        if (country !== null && country.trim() !== "") {

            const phoneNumber = prompt("Enter your phone number");
            if (phoneNumber !== null && phoneNumber.trim() !== "") {


                const state = prompt("Enter your state");
                if (state !== null && state.trim() !== "") {

                    const city = prompt("Enter your city");
                    if (city !== null && city.trim() !== "") {

                        const village = prompt("Enter your village");
                        if (village !== null && village.trim() !== "") {

                            const userInfo = { userFirstName, userLastName, country, phoneNumber, state, city, village };
                            console.log(userInfo);
                            localStorage.setItem("userInfo", JSON.stringify(userInfo));

                            window.addEventListener("load", displayData);
                        }

                    }
                }
            }
        }
    }
}


function displayData() {
    const fragment = document.createDocumentFragment();

    const getInfo = JSON.parse(localStorage.getItem("userInfo"));

    const rightPart = document.querySelector(".rightpart");
    const fname = document.createElement("p");
    fname.innerText = ` ${getInfo.userFirstName}`;

    const lname = document.createElement("p");
    lname.innerText = `${getInfo.userLastName}`;

    const country = document.createElement("p");
    country.innerText = `${getInfo.country}`;

    const phoneNumber = document.createElement("p");
    phoneNumber.innerText = `${getInfo.phoneNumber}`;

    const state = document.createElement("p");
    state.innerText = `${getInfo.state}`;

    const city = document.createElement("p");
    city.innerText = `${getInfo.city}`;

    const village = document.createElement("p");
    village.innerText = `${getInfo.village}`;

    fragment.append(fname, lname, country, phoneNumber, state, city, village);
    rightPart.append(fragment);
}