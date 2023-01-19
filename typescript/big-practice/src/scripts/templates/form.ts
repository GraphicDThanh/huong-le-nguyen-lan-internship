import logo from 'assets/icons/google-keep.svg';
import iconError from 'assets/icons/error-icon.svg';

const formElement = (): Element => {
  const form = document.createElement('form');
  const page = window.location.href.replace('http://localhost:1234/', '');

  form.setAttribute('class', 'form-wrapper');
  form.setAttribute(
    'id',
    `${page === 'signup' ? 'sign-up-form' : 'login-form'}`
  );

  form.innerHTML = `
    <figure class="logo">
      <img src="${logo}" alt="logo google keep" />
    </figure>
    ${
      page === 'signup'
        ? `<h1 class="form-title">Sign up</h1>`
        : '<h1 class="form-title">Log in</h1>'
    }
    
    <div class="form-cover">
      <div class="form-group">
        <input
          type="email"
          name="email"
          class="email form-input"
          placeholder="&nbsp;"
          required
          pattern="[^@]+@[^@]+\\.[a-zA-Z]{2,6}"
          title="Email is valid"
          autocomplete="off"
        />
        <label class="form-label label-email">Email</label>
        <div class="message">
          <img
            src="${iconError}"
            alt="error icon"
            class="error-icon hide"
          />
          <span class="message-error"></span>
        </div>
      </div>

      <div class="form-group">
        <input
          type="password"
          name="password"
          class="password form-input"
          placeholder="&nbsp;"
          ${
            page === 'signUp'
              ? `
              minlength="8"
              pattern = '^(?=.*?[a-z])(?=.*?[0-9]).{0,}$'`
              : ''
          }
          title="Password must contain letters and at least one digit"
          required
          autocomplete="off"
        />
        <label class="form-label label-password">Password</label>
        <div class="message">
          <img
            src="${iconError}"
            alt="error icon"
            class="error-icon hide"
          />
          <span class="message-error"></span>
        </div>
      </div>

      ${
        page === 'signup'
          ? `<div class="form-group">
          <input
            type="password"
            name="confirm-password"
            class="confirm-password form-input"
            placeholder="&nbsp;"
            required
            autocomplete="off"
          />
          <label class="form-label label-confirm-password"
            >Confirm Password</label
          >
          <div class="message">
            <img
              src="${iconError}"
              alt="error icon"
              class="error-icon hide"
            />
            <span class="message-error"></span>
          </div>
        </div>`
          : ''
      }
      
    </div>

    ${
      page === 'signup'
        ? `<div class="form-button">
        <button type="button" class="btn-form btn-change-form btn-login-form">
          Sign in instead
        </button>
        <button
          type="submit"
          class="btn-form btn-submit-form btn-signup-form"
        >
          Sign Up
        </button>
      </div>`
        : `<div class="form-button">
        <button
          type="button"
          class="btn-form btn-change-form btn-create-account-form"
        >
          Create account
        </button>
        <button type="submit" class="btn-form btn-submit-form btn-login-form">
          Log in
        </button>
      </div>`
    }
  `;

  return form;
};

export default formElement;
