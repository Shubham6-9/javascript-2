function one(){
    let a=Number(document.getElementById("1-a").value)
    let b=Number(document.getElementById("1-b").value)
    let c=Number(document.getElementById("1-c").value)
    if(a>b && a>c){
        document.getElementById("1-max").innerText = `${a} is maximum`
        if(b<c)
            document.getElementById("1-min").innerText = `${b} is minimum`
        else
            document.getElementById("1-min").innerText = `${c} is minimum`
    }
    else if(b>a && b>c){
        document.getElementById("1-max").innerText = `${b} is maximum`
        if(a<c)
            document.getElementById("1-min").innerText = `${a} is minimum`
        else
            document.getElementById("1-min").innerText = `${c} is minimum`
    }
    else if(c>a && c>b){
        document.getElementById("1-max").innerText = `${c} is maximum`
        if(a<b)
            document.getElementById("1-min").innerText = `${a} is minimum`
        else
            document.getElementById("1-min").innerText = `${b} is minimum`
    }
    else{
        document.getElementById("1-max").innerText = "Either two or all numbers are same"
    }
}

function two(){
    let a=Number(document.getElementById("2-a").value)
    let b=Number(document.getElementById("2-b").value)
    let c=Number(document.getElementById("2-c").value)
    if(a>b && a>c){
        document.getElementById("2-max").innerText = `${a} is maximum`
        if(b<c)
            document.getElementById("2-min").innerText = `${b} is minimum`
        else
            document.getElementById("2-min").innerText = `${c} is minimum`
    }
    else if(b>a && b>c){
        document.getElementById("2-max").innerText = `${b} is maximum`
        if(a<c)
            document.getElementById("2-min").innerText = `${a} is minimum`
        else
            document.getElementById("2-min").innerText = `${c} is minimum`
    }
    else if(c>a && c>b){
        document.getElementById("2-max").innerText = `${c} is maximum`
        if(a<b)
            document.getElementById("2-min").innerText = `${a} is minimum`
        else
            document.getElementById("2-min").innerText = `${b} is minimum`
    }
    else
        document.getElementById("2-max").innerText = "Either two or all numbers are same"
}

function three(){
    let a=Number(document.getElementById("3").value)
    let res
    if(a>0 && a<=50){
        res = a*0.5
        res += res*0.2
        document.getElementById("3-ans").innerText = `${res} is total bill`
    }
    else if(a>50 && a<=150){
        res = 25
        res += (a-50)*0.75
        res += res*0.2
        document.getElementById("3-ans").innerText = `${res} is total bill`
    }
    else if(a>150 && a<= 250){
        res = 100
        res += (a-150)*1.2
        res += res*0.2
        document.getElementById("3-ans").innerText = `${res} is total bill`
    }
    else if(a>250){
        res = 220
        res += (a-250)*1.5
        res += res*0.2
        document.getElementById("3-ans").innerText = `${res} is total bill`
    }
}

function four(){
    let a=Number(document.getElementById(4).value)
    if(a>0)
        document.getElementById("4-ans").innerText = `${a} is Positive`
    else if(a<0)
        document.getElementById("4-ans").innerText = `${a} is negative`
    else
        document.getElementById("4-ans").innerText = `${a} is Neutral`
}

function five(){
    let a=Number(document.getElementById("5").value)
    if(a>0 && a<=100){
        if(a>=90 && a<=100)
            document.getElementById("5-ans").innerText = "A grade"
        else if(a>=80 && a<90)
            document.getElementById("5-ans").innerText = "B Grade"
        else if(a>=70 && a<80)
            document.getElementById("5-ans").innerText = "C Grade"
        else if(a>=60 && a<70)
            document.getElementById("5-ans").innerText = "D Grade"
        else
            document.getElementById("5-ans").innerText = "F Grade"
    }
    else{
        document.getElementById("5-ans").innerText = "Enter Proper Value"
    }
}