// Importamos las funciones y clases que vamos a testear
import { init } from '../../src/js';
import { Modal } from '../../src/js/classes/modal';

// Hacemos un mock de la función getHTMLElement, que se encuentra en el archivo get-html-element.js
// Esto nos permite simular la respuesta de esta función en los tests
// Mocking getHTMLElement
jest.mock('../../src/js/helpers/get-html-element', () => ({
  getHTMLElement: jest.fn().mockImplementation((selector) => {
    // Si el selector es 'btn', 'modal' o 'modal-close', se retorna un objeto con la propiedad style.display seteada a 'none'
    if (
      selector === 'btn' ||
      selector === 'modal' ||
      selector === 'modal-close'
    ) {
      return { style: { display: 'none' } };
    }
    // Si el selector no coincide con los esperados, se lanza un error
    throw new Error(`Check the selector "${selector}", as it does not exist`);
  }),
}));

// En este describe agrupamos los tests para la clase Modal
describe('Modal', () => {
  let modal;
  let modalElement;
  let btnElement;
  let btnCloseElement;

  // beforeEach se ejecuta antes de cada test, y nos permite preparar los elementos que vamos a testear
  beforeEach(() => {
    // Creamos tres elementos del DOM, que van a ser pasados como argumentos al constructor de Modal
    modalElement = document.createElement('div');
    btnElement = document.createElement('button');
    btnCloseElement = document.createElement('button');

    // Creamos una instancia de Modal con los elementos creados
    modal = new Modal(modalElement, btnElement, btnCloseElement);
  });

  // En este test comprobamos que la función showModal cambia el estilo de display del elemento modal a 'block'
  test('showModal changes display style to block', () => {
    modal.showModal();
    expect(modalElement.style.display).toBe('block');
  });

  // En este test comprobamos que la función closeModal cambia el estilo de display del elemento modal a 'none'
  test('closeModal changes display style to none', () => {
    modal.closeModal();
    expect(modalElement.style.display).toBe('none');
  });

  // En este test comprobamos que la función init añade un event listener al documento con el evento 'click'
  test('should add a click event listener to the document', () => {

    // 'Mockeamos' la función addEventListener del documento
    document.addEventListener = jest.fn();
    
    init();

    // Comprobamos que se ha llamado a la función addEventListener con los argumentos esperados
    expect(document.addEventListener).toHaveBeenCalledWith(
      'click',
      expect.any(Function)
    );
  });
});
