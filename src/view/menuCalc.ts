import { leerTeclado } from './entradaTeclado'

export const menuCalc = async () => {
    let opcion: number
    console.log('\n')
    console.log('-- CALCULADORA --')
    console.log('1. Primos')
    console.log('2. Fechas')
    console.log('3. Comparaciones')
    console.log('4. MCD')
    console.log('5. Par o impar')
    console.log('-----------------')
    console.log('0. Salir')
    opcion = parseInt( await leerTeclado('opción: ') )
    return opcion
}