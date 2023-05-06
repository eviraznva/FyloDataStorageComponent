document.addEventListener('keypress', e => {
    let valueAdd = Number((Number(document.querySelector(".content-progres").getAttribute("aria-value")) + 0.4).toFixed(1))
    let valueSub = Number((Number(document.querySelector(".content-progres").getAttribute("aria-value")) - 0.4).toFixed(1))

    if (valueAdd % Number(valueAdd.toFixed(0)) != 0 || valueSub % Number(valueSub.toFixed(0)) != 0){
        if (e.key == "+")
            document.querySelector(".content-progres").setAttribute("aria-value", valueAdd)
        else if (e.key == "-")
            document.querySelector(".content-progres").setAttribute("aria-value", valueSub)
    }else{
        if (e.key == "+")
            document.querySelector(".content-progres").setAttribute("aria-value", valueAdd.toFixed(0))
        else if (e.key == "-")
            document.querySelector(".content-progres").setAttribute("aria-value", valueSub.toFixed(0))
    }
});