$(document).ready(function () {
    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content"
        });
    });

    window.onscroll = () => {
      // console.log(scrollY);
      add_btn_scrolltop();
      add_btn_scrolldown();
    }

    // Botón volver arriba script
    const btn_scrolltop = document.getElementById('btn_scrolltop');
    
    btn_scrolltop.addEventListener('click', () => {
        window.scrollTo(0,0);
    });

    const add_btn_scrolltop = () => {
      if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on");
      } else {
        btn_scrolltop.classList.add("btn-scrolltop-on");
      }
    };

    // Botón ir abajo
    const btn_scrolldown = document.getElementById('btn_scrolldown');
    
    btn_scrolldown.addEventListener('click', () => {
      window.scrollTo(0,5000);
    });

    const add_btn_scrolldown = () => {
      if (window.scrollY < 300) {
        btn_scrolldown.classList.add("btn-scrolldown-on");
      } else {
        btn_scrolldown.classList.remove("btn-scrolldown-on");
      }
    };

    // Formulario
    var formularioContacto = $('#formulario');
   
    if(formularioContacto.length){
      // jQueryValidate
      formularioContacto.validate({
        rules: {
          nombre: {
            required: true
          },
          apellidos: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          entrada: {
            required: true
          },
          asistente: {
            required: true
          },
          grada: {
            required: true
          },
        },
        messages: {
          nombre: {
            required: 'El nombre es obligatorio'
          },
          apellidos: {
            required: 'Por favor, escribe tus apellidos'
          },
          email: {
            required: 'El email es obligatorio',
            email: 'Por favor, introduce un email válido'
          },
          entrada: {
            required: 'Por favor, elige el número de entradas'
          },
          asistente: 'Por favor, indica el tipo de asistente',
          grada: {
            required: 'Selecciona una opción'
          },
        },
        errorPlacement: function(error, element) {
          if(element.is(":radio")){
            error.appendTo(element.parents('.radio'));
          }else if(element.is(":checkbox")){
            error.appendTo(element.parents('.checkbox'));
          } else {
            error.insertAfter(element);
          }
        }
      });
    }
});
