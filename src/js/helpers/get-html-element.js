

/**
 * @description Gets the elements of the DOM.
 * @param {String} selector
 * @returns {HTMLElement}
 */
export const getHTMLElement = ( selector ) => {
  const element = document.getElementById( selector );

  if (element) return element;

  throw new Error(`Check the selector "${ selector }", as it does not exist`);
};
