

export class Modal {

  constructor(modal, btn, btnClose) {
    this.modal = modal;
    this.btn = btn;
    this.btnClose = btnClose;
  }

  showModal(){    
    this.modal.style.display = 'block';
  }

  closeModal(){
    this.modal.style.display = 'none';
  }
}