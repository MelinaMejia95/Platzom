# Platzom 

Platzom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com) , y que será utilizado para realizar el proyecto del curso.

## Descripción del Idioma

- Si la palabra termina en "ar", se le quitan esos dos parámetros
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra tiene 10 o más letra se debe partir a la mitad y unir con un guión en el medio
- Si la palabra es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas

## Instalación 

```
npm install platzom 
```

## Uso

```
import platzom from 'platzom'
platzom("Programar") //Program
platzom("Zorro") //Zorrope
platzom("Zarpar") //Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos") //SoMeTeMoS
```

## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)