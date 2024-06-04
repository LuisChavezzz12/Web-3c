function suma(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus
        } else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus
        }
        return
    }

    var sum= valor1+valor2
    
    h3.innerHTML=sum
}   
    
function resta(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus
        } else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus
        }
        return
    }
    var res=valor1-valor2
    h3.innerHTML=res
}

function mult(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus
        } else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus
        }
        return
    }
    var multiplicacion=valor1*valor2
    h3.innerHTML=multiplicacion
}

function div(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")

        if(valor2==0){
            h3.innerHTML="No se puede dividir entre 0"
            document.getElementById("v2").focus

            return
        }
    var division=valor1/valor2
    h3.innerHTML=division
}