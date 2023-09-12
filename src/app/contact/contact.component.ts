import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('formSubmitSuccessful') formSubmitSuccessful!: ElementRef;

  constructor() { }

  nameFieldValid = false;
  mailFieldValid = false;
  messageFieldValid = false;
  formDataValid = false;

  ngOnInit(): void {
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.validateContactForm(nameField, mailField, messageField);

    if (this.formDataValid) {
      nameField.disabled = true;
      mailField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;

      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('mail', mailField.value);
      fd.append('message', messageField.value);

      await fetch('https://amar-sahinovic.de/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd
        }
      );

      this.reEnableForm(nameField, mailField, messageField, sendButton);
      this.reStyleForm(nameField, mailField, messageField);
      this.clearForm(nameField, mailField, messageField);
      this.displayFormSubmitSuccessful();
    }
  }

  validateContactForm(nameField, mailField, messageField) {
    this.validateName(nameField);
    this.validateMail(mailField);
    this.validateMessage(messageField);
    this.validateForm();
  }

  validateName(nameField) {
    if (nameField.value.length >= 2 && nameField.value.length <= 50) {
      this.nameFieldValid = true;
    } else { this.nameFieldValid = false; }
  }

  validateMail(mailField) {
    if (mailField.value.includes("@")) {
      const mailFieldArray = mailField.value.split("@");
      if (mailFieldArray[0].length >= 2 && mailFieldArray[1].includes(".")) {
        const mailFieldAfterAtArray = mailFieldArray[1].split(".");
        if (mailFieldAfterAtArray[0].length >= 2 && mailFieldAfterAtArray[1].length >= 2) {
          this.mailFieldValid = true;
        } else { this.mailFieldValid = false; }
      } else { this.mailFieldValid = false; }
    } else { this.mailFieldValid = false; }
  }

  validateMessage(messageField) {
    if (messageField.value.length >= 10 && messageField.value.length <= 1000) {
      this.messageFieldValid = true;
    } else { this.messageFieldValid = false; }
  }

  validateForm() {
    if (this.nameFieldValid && this.mailFieldValid && this.messageFieldValid) {
      this.formDataValid = true;
    } else {
      this.formDataValid = false;
    }
    this.formValidationFeedback();
  }

  formValidationFeedback() {
    this.formValidationToggleCSSClass(this.nameField, this.nameFieldValid);
    this.formValidationToggleCSSClass(this.mailField, this.mailFieldValid);
    this.formValidationToggleCSSClass(this.messageField, this.messageFieldValid);
  }

  formValidationToggleCSSClass(field, isValid) {
    if (isValid) {
      field.nativeElement.classList.add('textfields__valid');
      field.nativeElement.classList.remove('textfields__invalid');
    } else {
      field.nativeElement.classList.add('textfields__invalid');
      field.nativeElement.classList.remove('textfields__valid');
    }
  }

  reEnableForm(nameField, mailField, messageField, sendButton) {
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  reStyleForm(nameField, mailField, messageField) {
    nameField.classList.remove('textfields__valid');
    nameField.classList.remove('textfields__invalid');
    mailField.classList.remove('textfields__valid');
    mailField.classList.remove('textfields__invalid');
    messageField.classList.remove('textfields__valid');
    messageField.classList.remove('textfields__invalid');
  }

  clearForm(nameField, mailField, messageField) {
    nameField.value = "";
    mailField.value = "";
    messageField.value = "";
  }

  displayFormSubmitSuccessful() {
    const formSubmitSuccessful = this.formSubmitSuccessful.nativeElement;
    formSubmitSuccessful.classList.toggle('is__active');
    setTimeout(() => {
      formSubmitSuccessful.classList.toggle('is__active');
    }, 2000);
  }

  sectionHero() {
    document.getElementById("sectionHero").scrollIntoView();
  }
  
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
