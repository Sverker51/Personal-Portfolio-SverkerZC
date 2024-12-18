/*el icon en navbar*/
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

//window.onscroll: Esto establece una función que se ejecutará cada vez que el usuario realiza un desplazamiento en la ventana (scroll).
window.onscroll = () => {

    // Itera sobre cada sección en el documento
    sections.forEach(sec => {

        // Obtiene la posición actual de desplazamiento vertical de la ventana
        let top=window.scrollY;

        // Obtiene la posición superior (offsetTop) de la sección actual, ajustada por un valor de desplazamiento (-100 píxeles)
        let offset =sec.offsetTop - 100;

        // Obtiene la altura de la sección actua
        let height =sec.offsetHeight;

        // Obtiene el atributo 'id' de la sección actual
        let id =sec.getAttribute('id');

        // Comprueba si la posición actual de desplazamiento está dentro del rango de la sección actual
        if(top >= offset && top < offset + height){

            //active navbar links & Activa los enlaces de la barra de navegación correspondientes a la sección actual
            navLinks.forEach(links => {

                // Quita la clase 'active' de todos los enlaces de la barra de navegación
                links.classList.remove('active');

                // Añade la clase 'active' al enlace de la barra de navegación que coincide con la sección actual
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //Secciones activas para la animación en el desplazamiento
            set.classList.add('show-animate');

        }
        else{ // Si desea usar una animación que se repite en el desplazamiento, use esto
            set.classList.remove('show-animate');
        }

    });

    /* Encabezado pegajoso ----- sticky header
    let header = document.querySelector('header');: Aquí se está seleccionando el elemento del DOM que 
    tiene la etiqueta header. Esto se hace utilizando document.querySelector('header'), que busca el primer elemento header en el 
    documento HTML y lo asigna a la variable header.
    */
    let header = document.querySelector('header');
    /*header.classList.toggle('sticky', window.scrollY > 100);: Esta línea agrega o quita la clase 'sticky' 
    del elemento header dependiendo de si la posición de desplazamiento vertical (window.scrollY) es mayor que 100 píxeles. 
    En otras palabras, cuando el usuario ha hecho scroll más allá de los 100 píxeles, se agrega la clase 'sticky'; de lo contrario, se elimina.
    */
    header.classList.toggle('sticky',window.scrollY >100);

    //remove toggle icon and navbar when click navbar list
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

