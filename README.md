La siguiente aplicación se ha creado utilizando la herramienta create-react-app + mobx.

Se puede encontrar en el siguiente enlace [MobX](https://mobxjs.github.io/mobx).

Para poder ejecutal el proyecto correctamente es necesario tener instalado la herramienta npm.
Una vez clonado el repositorio desde el propio directorio ejecutaremos npm install para instalar todas las dependencias. (desde el directorio create-react-app-mobx-master)
Tras finalizar podremos ejecutar npm start y podremos ejectutar el juego .

![](https://github.com/hevacho/TicTacToe/blob/master/create-react-app-mobx-master/tictactoe.png)



##Estructura del programa

El programa se encuentra estructurado mediante 4 componentes.

-Casilla: componente que representa una casilla del Juego. Tiene una posición como propiedad para poder identificarla y además es el que dispara los clicks.

- Tablero: es un componente que permite crear el tablero mediante un conjunto de casillas.

- Marcador: es un compomente que muestra la información al usuario, el turno, si ha ganado, si se ha terminado el juego...

- DatosTicTacToe: es la clase que contiene la lógica del juego y los datos. De esta forma tenemos un store con todo el modelo de datos que necesitamos y la casilla al disparar el evento modifica estos valores. Por último apoyándonos en las librerías de mobx y usando el patrón observer los componentes de tipo casilla y marcador se vuelven a renderizar con cada cambio.

- Juego: componente que agrupa tanto el tablero como el marcador. Es la entrada principal del programa
