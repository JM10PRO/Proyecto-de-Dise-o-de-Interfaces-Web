jQuery(function() {
    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content"
        });
        
    });

    // Animaci贸n 隆No te vayas, por favor!
    let previousTitle = document.title;
    window.addEventListener('blur', () => {
      previousTitle = document.title;
      document.title = '隆No te vayas por favor! 馃槰';
    });

    window.addEventListener('focus', () => {
      document.title = previousTitle;
    });

    // Animaci贸n spinner
    $('#myspinner').hide();
    
    $('#mostrar-spinner').on('click', function () {
      
      $("#myspinner").show();
      const myTimeout = setTimeout(ocultarSpinner, 5000);
      
    });
    
    function ocultarSpinner() {
      $("#myspinner").hide();
    }

    // Aparece o desaparece el bot贸n de subir o bajar
    window.onscroll = () => {
      // console.log(scrollY);
      add_btn_scrolltop();
      add_btn_scrolldown();
    }

    // Bot贸n volver arriba script
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

    // Bot贸n ir abajo
    const btn_scrolldown = document.getElementById('btn_scrolldown');
    
    btn_scrolldown.addEventListener('click', () => {
      window.scrollTo(0,10000);
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
            required: true,
            minlength: 2
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
            required: 'El nombre es obligatorio',
            minlength: 'Por favor, escribe al menos dos letras'
          },
          apellidos: {
            required: 'Por favor, escribe tus apellidos'
          },
          email: {
            required: 'El email es obligatorio',
            email: 'Por favor, introduce un email v谩lido'
          },
          entrada: {
            required: 'Por favor, elige el n煤mero de entradas'
          },
          asistente: 'Por favor, indica el tipo de asistente',
          grada: {
            required: 'Selecciona una opci贸n'
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
