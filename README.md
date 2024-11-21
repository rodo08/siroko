# Prueba Técnica SIROKO: Generación de Cupón con Temporizador

Este proyecto es una **prueba técnica** pensada para demostrar el dominio de **HTML**, **CSS** y **JavaScript**, así como el uso de buenas prácticas de programación, incluyendo los principios **SOLID**. La aplicación está diseñada para gestionar un formulario interactivo que guía al usuario a través de varios pasos y genera un **código de cupón** de descuento con un **temporizador**.

## Descripción

El propósito de esta prueba es mostrar la capacidad de implementar un flujo de trabajo dinámico utilizando **clases**, **herencia** y otros conceptos avanzados en **JavaScript**, con el fin de construir una experiencia interactiva, escalable y fácil de mantener.

La aplicación permite a los usuarios completar un formulario paso a paso, generar un código de cupón basado en sus respuestas y visualiza un temporizador con cuenta regresiva.

### Características principales:

- **Formulario paso a paso**: Utiliza un array con datos dinámicos para crear formularios interactivos.
- **Generación de cupones**: Al completar los formularios, se genera un código de cupón basado en las respuestas del usuario.
- **Temporizador**: Se inicia un temporizador de 20 minutos que cuenta atrás hasta su finalización.
- **Interacción con el usuario**: Permite copiar el código generado al portapapeles una vez finalizado el temporizador.

## Tecnologías Utilizadas

- **HTML5**: Estructura básica de la interfaz.
- **CSS3**: Estilo y diseño de la página.
- **JavaScript (ES6+)**: Lógica de la aplicación, usando clases y principios de programación orientada a objetos.
- **SOLID**: Principios de diseño orientados a la mejora de la escalabilidad y mantenibilidad del código.

## Funcionamiento

1.  **Inicio del Formulario**: La aplicación comienza renderizando el primer paso del formulario, que se despliega dinámicamente a medida que el usuario avanza. Los datos utilizados en cada paso son proporcionados por el archivo `dataSteps.js`.
2.  **Avance de los Pasos**: Cada vez que el usuario hace clic en el botón "Siguiente", el sistema guarda sus respuestas y pasa al siguiente paso. Al llegar al tercer paso, se genera un **código de cupón** utilizando las respuestas del usuario.
3.  **Temporizador**: En el tercer paso, si el temporizador no ha comenzado aún, se inicia un temporizador de 20 minutos que muestra un conteo regresivo. Al finalizar el tiempo, el botón para copiar el cupón se desactiva y cambia de estado.
4.  **Generación de Cupones**: Basado en las respuestas del usuario, el sistema genera un código de cupón. Este código se muestra al usuario y se puede copiar al portapapeles con un simple clic en el botón correspondiente.

## Principios SOLID Aplicados

Este proyecto sigue los principios SOLID para garantizar un código más limpio, mantenible y escalable:

- **S (Single Responsibility Principle)**: Cada clase y función tiene una responsabilidad única (ej. `CouponClass` solo se encarga de la generación del cupón).
- **O (Open/Closed Principle)**: El sistema está diseñado para ser extensible sin modificar el código existente. Se pueden añadir nuevos pasos o formularios sin afectar a otras partes del sistema.
- **L (Liskov Substitution Principle)**: Las clases están diseñadas para ser reemplazables sin alterar el comportamiento esperado.
- **I (Interface Segregation Principle)**: No se crean interfaces complejas ni obligatorias; las clases y funciones están especializadas para realizar tareas concretas.
- **D (Dependency Inversion Principle)**: La lógica de la aplicación no depende de detalles específicos, sino de abstracciones (clases e interfaces).

## Enlace de Despliegue

La aplicación está desplegada y puedes probarla directamente en el siguiente enlace:
https://technical-test-siroko.netlify.app/

## Análisis de Lighthouse

Aquí se muestra el análisis de Lighthouse con los siguientes puntajes:

- **Desempeño**: 97
- **Accesibilidad**: 83
- **Buenas prácticas**: 100
- **SEO**: 90

![Análisis de Lighthouse](https://i.postimg.cc/2S51sn1h/Screenshot-2024-11-21-221858.jpg)

## Conclusión

Este proyecto demuestra la implementación de un flujo de trabajo dinámico e interactivo utilizando buenas prácticas en el desarrollo de **JavaScript**. A través de clases, herencia y principios **SOLID**, se busca crear un sistema fácil de mantener y extender, lo que hace que sea adecuado para proyectos de mayor envergadura.
