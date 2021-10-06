import { menuCalc } from './view/menuCalc'
import { leerTeclado } from './view/entradaTeclado'
import { Console } from 'console'

const main = async () => {
    let opCase: number
    do {

        opCase = await menuCalc()
        switch(opCase){
            case 1:
                console.log("-----------------------------")
                console.log("-- ESTAS EN NUMEROS PRIMOS --")
                console.log("-----------------------------")
                await primos()
                break

            case 2:
                console.log("---------------------")
                console.log("-- ESTAS EN FECHAS --")
                console.log("---------------------")
                await fechas()
                break

            case 3:
                console.log("----------------------------")
                console.log("-- ESTAS EN COMPARACIONES --")
                console.log("----------------------------")
                await comparaciones()
                break

            case 4:
                console.log("------------------")
                console.log("-- ESTAS EN MCD --")
                console.log("------------------")
                await MCD()
                break

            case 5:
                console.log("--------------------------")
                console.log("-- ESTAS EN PAR O IMPAR --")
                console.log("--------------------------")
                await PoP()
                break

            case 0:
                console.log('\n Gracias por usar la calculadora')
                break

            default:
                console.log("Opción incorrecta")
                break
        }
        console.log("Presione enter para continuar")
        await leerTeclado(' ')
    }
    while (opCase != 0)
}

/////////////
///FUNTIONS
////////////

const primos = async () => {

    var entrada = parseInt(await leerTeclado('Introduzca un numero '))
    var primo = true;
    for (var i=2; i<entrada; i++) {
        if (entrada%i==0) {
            primo = false;
        }        
    } if(primo==true) {
        console.log("El numero es primo")
    } else {
        console.log("El numero no es primo")
    }
}

const fechas = async () => {
    
    console.log('Tiene que introducir formato fecha de tal manera --> aaaa-mm-dd')
    var n1 = await leerTeclado('Dame una fecha') 
    var n2 = await leerTeclado('Dame otra fecha')

    var fecha1 = new Date(n1)
    var fecha2 = new Date(n2)

    var diff = Math.abs(fecha1.getTime() - fecha2.getTime());
    var solucion = Math.ceil(diff / (1000 * 3600 * 24));

    var años = Math.trunc(solucion/365)
    var meses= Math.trunc((solucion-años*365)/30)
    var dias = Math.trunc(solucion-(meses*30) - (años*365))


    console.log('Han pasado: ' + años + ' años ' + meses + ' meses ' + dias + ' dias ');

    return solucion;

}

const comparaciones = async () => {
   
    var n1 =  parseInt( await leerTeclado('Dame primer numero')) 
    var n2 =  parseInt( await leerTeclado('Dame segundo numero'))
    var n3 =  parseInt( await leerTeclado('Dame tercer numero'))

    var array=[n1,n2,n3]
    var mayor = 0

    for (let i = 1; i < array.length; i++) {
        if (array[i]>mayor){
            mayor = array [i]
        }
    }


    console.log('El numero mayor es ' + mayor)
}

const MCD = async () => {
    var a = parseInt(await leerTeclado('Introduzca un numero '))
    var b = parseInt(await leerTeclado('Introduzca otro numero '))

    while (a != b) {
        if (a > b) {
            a -= b;
        }else{
            b -=a;
        }
    }

    console.log('EL MCD ES ' + a)
    
}

const PoP = async () => {
    var entrada = parseInt(await leerTeclado('Introduzca un numero '))
    if(entrada/2==0){
        console.log('El numero es PAR')
    }else{
        console.log('El numero es IMPAR')
    }
}

main()

