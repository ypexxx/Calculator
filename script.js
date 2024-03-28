const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["%", "*", "/", "-", "+", "="];
let output = " ";

// fungsi untuk menghitung berdasar operasi
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // jika outputnya % maka tetapkan /100 sebelum perhitungan
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChar.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output;
}

// event listener untuk button, memanggil calculate() on click
buttons.forEach((button) => {
    //button click listener memanggil calculate() dengan dataset value sebagai argumen
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});