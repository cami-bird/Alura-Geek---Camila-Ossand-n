//section container

document.querySelector('.container__formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagenInput = document.getElementById('imagen_articulo');
    const file = imagenInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newProduct = document.createElement('div');
            newProduct.classList.add('productos__box');
            newProduct.innerHTML = `
                <ul>
                    <li class="img__producto"><img class="producto__item" src="${e.target.result}" alt="${nombre}"></li>
                    <li class="producto__title">${nombre}</li>
                    <li class="producto__precio">${precio}</li>
                    <li><button class="btn__eliminar"><i class="fas fa-trash-alt"></i> Eliminar</button></li>
                </ul>`;

            document.querySelector('.productos__line').appendChild(newProduct);

            document.querySelector('.container__formulario').reset();
        }
        reader.readAsDataURL(file);
    }
});

//botón restablecer

document.querySelector('.container__formulario').addEventListener('reset', function() {
    document.getElementById('show_loaded_image').innerHTML = '';
});

//boton eliminar de section productos

document.querySelector('.productos__line').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn__eliminar') || event.target.closest('.btn__eliminar')) {
        const productBox = event.target.closest('.productos__box');
        if (productBox) {
            productBox.remove();
        }
    }
});