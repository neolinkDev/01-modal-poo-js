import { Modal } from './classes/modal';
import { getHTMLElement } from './helpers/get-html-element';

// "$" Variables of the DOM
const $btn      = getHTMLElement('btn'),
      $modal    = getHTMLElement('modal'),
      $btnClose = getHTMLElement('modal-close');

// instance
const modal = new Modal($modal, $btn, $btnClose );

/**
 * 
 * @param {Event} e 
 */
const handleClick = (e) => {

  const target = e.target;

  if (target === modal.btn) {
    e.preventDefault();
    modal.showModal();
  }  

  if (target === modal.btnClose || target === modal.modal) {
    modal.closeModal();
  }
}

export const init = () => {
  document.addEventListener('click', handleClick);
};
