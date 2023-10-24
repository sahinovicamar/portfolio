import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  nameValid = true;
  emailValid = true;
  messageValid = true;
  formGroupValid = false;
  isLoading = false;
  sendMessage = false;

  contactForm = new FormGroup({
    nameForm: new FormControl('', [Validators.required, Validators.minLength(3),]),
    emailForm: new FormControl('', [Validators.required, Validators.email]),
    messageForm: new FormControl('', [Validators.required, Validators.minLength(5),]),
  });


  ngOnInit(): void {
    this.checkFormGroup();
  }


  /**
   * Check if the form group is valid and change the value of this.formGroupValid to change the css class of the buttton
   *
   */
  checkFormGroup() {
    if (this.contactForm?.valid) {
      this.formGroupValid = true;
    } else {
      this.formGroupValid = false;
    }
  }

  
  /**
   * Get the name input field from the form group to use form control
   *
   */
  get nameForm() {
    return this.contactForm.get('nameForm');
  }


  /**
   * Get the email input field from the form group to use form control
   *
   */
  get emailForm() {
    return this.contactForm.get('emailForm');
  }


  /**
   * Get the message text area from the form group to use form control
   *
   */
  get messageForm() {
    return this.contactForm.get('messageForm');
  }


  /**
   * Get the values of the input fields, send the email with all data from the contact form and reset the form group
   *
   */
  sendMail() {
    this.isLoading = true;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.nameField.nativeElement;

    this.disableFields(nameField, emailField, messageField, sendButton);
    this.fetchData(nameField, emailField, messageField);
    this.enableFields(nameField, emailField, messageField, sendButton);
    this.contactForm.reset();
    this.isLoading = false;
    this.showTextSuccess();
    this.checkFormGroup();
  }


  /**
   * Send an email with all data from the input fields
   *
   * @param nameField - This is the name input field
   * @param emailField - This is the email input field
   * @param messageField - This is the message input field
   */
  async fetchData(nameField: any, emailField: any, messageField: any) {
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://amarsahinovic.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );
  }


  /**
   * Show a text that the message was successfully sended
   *
   */
  showTextSuccess() {
    this.sendMessage = true;
    setTimeout(() => {
      this.sendMessage = false;
    }, 2000);
  }


  /**
   * Disable all input fields and the button
   *
   * @param nameField - This is the name input field
   * @param emailField - This is the email input field
   * @param messageField - This is the message input field
   * @param sendButton - This is the "send message" button
   */
  disableFields(nameField: any, emailField: any, messageField: any, sendButton: any) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  /**
   * Disable all input fields and the button
   *
   * @param nameField - This is the name input field
   * @param emailField - This is the email input field
   * @param messageField - This is the message input field
   * @param sendButton - This is the "send message" button
   */
  enableFields(nameField: any, emailField: any, messageField: any, sendButton: any) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }


  /**
   * Check if the name input field is dirty or touched and change the value of this.nameValid
   *
   */
  checkNameField() {
    if (
      this.nameForm?.invalid &&
      (this.nameForm?.dirty || this.nameForm?.touched)
    ) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
    this.checkFormGroup();
  }


  /**
   * Check if the email input field is dirty or touched and change the value of this.emailValid
   *
   */
  checkEmailField() {
    if (
      this.emailForm?.invalid &&
      (this.emailForm?.dirty || this.emailForm?.touched)
    ) {
      this.emailValid = false;
    } else {
      this.emailValid = true;
    }
    this.checkFormGroup();
  }


  /**
   * Check if the message input field is dirty or touched and change the value of this.messageValid
   *
   */
  checkMessageField() {
    if (
      this.messageForm?.invalid &&
      (this.messageForm?.dirty || this.messageForm?.touched)
    ) {
      this.messageValid = false;
    } else {
      this.messageValid = true;
    }
    this.checkFormGroup();
  }


  /**
   * Scroll to the top of the website
   *
   */
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}