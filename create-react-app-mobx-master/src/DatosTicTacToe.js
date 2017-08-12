import { extendObservable, computed } from 'mobx';

class DatosTicTacToe {
    constructor(){
        extendObservable(this,
            {valoresPosicion : [null,null,null,null,null,null,null,null,null],
             ultimoValorIntroducido : null
            });
    }

    modificarValor(index, simbolo){
        this.valoresPosicion[index]=simbolo;
        this.ultimoValorIntroducido=simbolo;
    }

    obtenerValor(index){
        return this.valoresPosicion[index];
    }

    getUltimoValorIntroducido(){
        return this.ultimoValorIntroducido;
    }


    obtenerGanador(){
        if(
              (this.valoresPosicion[0]!=null && this.valoresPosicion[0] === this.valoresPosicion[1] && this.valoresPosicion[0]=== this.valoresPosicion[2])
            ||(this.valoresPosicion[3]!=null && this.valoresPosicion[3] === this.valoresPosicion[4] && this.valoresPosicion[3]=== this.valoresPosicion[5])
            ||(this.valoresPosicion[6]!=null && this.valoresPosicion[6] === this.valoresPosicion[7] && this.valoresPosicion[6]=== this.valoresPosicion[8])

            ||(this.valoresPosicion[0]!=null && this.valoresPosicion[0] === this.valoresPosicion[3] && this.valoresPosicion[0]=== this.valoresPosicion[6])
            ||(this.valoresPosicion[1]!=null && this.valoresPosicion[1] === this.valoresPosicion[4] && this.valoresPosicion[1]=== this.valoresPosicion[7])
            ||(this.valoresPosicion[2]!=null && this.valoresPosicion[2] === this.valoresPosicion[5] && this.valoresPosicion[2]=== this.valoresPosicion[8])

            ||(this.valoresPosicion[0]!=null && this.valoresPosicion[0] === this.valoresPosicion[4] && this.valoresPosicion[0]=== this.valoresPosicion[8])
            ||(this.valoresPosicion[6]!=null && this.valoresPosicion[6] === this.valoresPosicion[4] && this.valoresPosicion[6]=== this.valoresPosicion[2])

        ){
            return this.ultimoValorIntroducido;
        }

        return null;
    }

    sinCasillasLibres(){
        let existeNull = false;
        for (let valor of this.valoresPosicion){
            if(valor === null){
                existeNull = true;
            }
        }
        return !existeNull;
    }



}

var datosTicTacToe = new DatosTicTacToe();

export default datosTicTacToe;