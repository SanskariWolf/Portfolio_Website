import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}


@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData: ContactFormData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    // Prepare the email data
    const emailData = {
      to: 'tanushpurwar@gmail.com',
      subject: `Portfolio Contact: Message from ${this.formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #004e89; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">New Contact Form Submission</h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #1a659e; margin-bottom: 5px;">Contact Details:</h3>
            <p><strong>Name:</strong> ${this.formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${this.formData.email}">${this.formData.email}</a></p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1a659e; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #ff6b35; border-radius: 5px;">
              ${this.formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Sent on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission

        Name: ${this.formData.name}
        Email: ${this.formData.email}

        Message:
        ${this.formData.message}

        Sent on: ${new Date().toLocaleString()}
      `
    };

    // Option 1: Using EmailJS (Recommended for client-side)
    this.sendWithEmailJS(emailData);

    // Option 2: Using a backend service (Alternative)
    // this.sendWithBackend(emailData);
  }

  private sendWithEmailJS(emailData: any): void {
    // EmailJS implementation
    // First, you need to include EmailJS in your index.html:
    // <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

    // Initialize EmailJS with your public key
    // You need to sign up at https://www.emailjs.com/ and get your keys

    const emailJSParams = {
      to_email: 'tanushpurwar@gmail.com',
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: `Portfolio Contact: Message from ${this.formData.name}`,
      message: this.formData.message,
      reply_to: this.formData.email
    };

    // Simulate EmailJS call for demonstration
    // In real implementation, replace this with actual EmailJS call:
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailJSParams, 'YOUR_PUBLIC_KEY')

    setTimeout(() => {
      // Simulate success/failure
      const isSuccess = Math.random() > 0.2; // 80% success rate for demo

      if (isSuccess) {
        this.submitStatus = 'success';
        this.resetForm();
      } else {
        this.submitStatus = 'error';
      }

      this.isSubmitting = false;

      // Clear status message after 5 seconds
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
    }, 2000);
  }

  private sendWithBackend(emailData: any): void {
    // Alternative: Send to your own backend service
    this.http.post('/api/send-email', emailData).subscribe({
      next: (response) => {
        this.submitStatus = 'success';
        this.resetForm();
        this.isSubmitting = false;

        setTimeout(() => {
          this.submitStatus = 'idle';
        }, 5000);
      },
      error: (error) => {
        console.error('Email sending failed:', error);
        this.submitStatus = 'error';
        this.isSubmitting = false;

        setTimeout(() => {
          this.submitStatus = 'idle';
        }, 5000);
      }
    });
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

  // Method to open email client as fallback
  openEmailClient(): void {
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Hi Tanush,\n\nI'd like to get in touch regarding your portfolio.\n\nBest regards,\n`);
    const mailtoLink = `mailto:tanushpurwar@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  }

  // Method to copy email to clipboard
  copyEmail(): void {
    navigator.clipboard.writeText('tanushpurwar@gmail.com').then(() => {
      // You can add a toast notification here
      console.log('Email copied to clipboard');
    });
  }

  // Method to copy phone number to clipboard
  copyPhone(): void {
    navigator.clipboard.writeText('+91 9555263470').then(() => {
      // You can add a toast notification here
      console.log('Phone number copied to clipboard');
    });
  }

}
