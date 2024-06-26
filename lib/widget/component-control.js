import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class ComponentControl extends piq {
  name() {
    return 'component-control';
  };

  style() {
    return css`

      .component-control {
        display: grid;
        grid-template-columns: 1fr;
      }

      .component-control {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        border-radius: 5px;
        overflow: hidden;
      }

      .component-control__header {
        background: #333;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: .3s ease;
      }

      .component-control__header--highlight {
        background: orange;
      }

      .component-control__header--highlight .component-control__header-text {
        color: #000000;
      }

      .component-control__toggle {
        border-radius: 5px;
        background: #111111;
        width: 20px;
        height: 20px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid #111111;
        transition: .3s ease;
      }

      .component-control__toggle:hover {
        border: 1px solid #ffffff;
      }

      .component-control__btn-close {
        display: none;
      }

      .component-control__toggle--opened .component-control__btn-close {
        display: block;
      }

      .component-control__toggle--opened .component-control__btn-open {
        display: none;
      }

      .component-control__input-group {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        overflow: hidden;
        height: 0px;
      }

      .component-control__input-group--opened {
        height: 100%;
      }

      .component-control__label {
        background: #222;
        color: #999;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .component-control select {
        padding: var(--space-s);
        width: 100%;
        background: transparent;
        color: var(--color-fg);
        font-size: 16px;
        border: none;
      }

      .component-control select option {
        background: var(--color-bg);
      }

      .component-control input[type="text"],
      .component-control select,
      .component-control textarea {
        box-sizing: border-box;
        border: none;
        padding: var(--space-s);
        width: 100%;
        background: #111;
        color: #999;
        font-size: 16px;
      }

      .component-control input[type="text"]:focus,
      .component-control select:focus,
      .component-control textarea:focus {
        outline: none;
        background: var(--color-bg);
        color: var(--color-fg);
      }

      .component-control__btn-group {
        display: flex;
        justify-content: flex-end;
        padding: var(--space-s);
      }

      .component-control__btn-save {
        display: inline-block;
        cursor: pointer;
        background: #333;
        color: #fff;
        border: none;
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 5px;
        min-width: 120px;
        transition: .3s ease;
        border: 1px solid #333;
      }

      .component-control__btn-save:hover {
        background: #222;
        border: 1px solid #999;
      }
    `;
  };

  iconChevronDown() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
    `;
  };

  iconChevronUp() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
    `;
  };

  data() {
    return {
      sectionName: this.props('data-section-name'),
      component: this.props('data-component'),
      title: this.props('data-title'),
      titleLevel: this.props('data-title-level'),
      ctaText: this.props('data-cta-text'),
      ctaLink: this.props('data-cta-link'),
      image: this.props('data-image'),
      body: this.props('data-body'),
    }
  };

  setDefaultComponent() {
    const options = this.querySelectorAll('option');
    options.forEach((i) => {
      if (i.value === this.data().component) {
        i.selected = true;
      }
    });
  };

  controlListener() {
    const _this = this;
    const controls = this.querySelectorAll('[data-node]');
    controls.forEach((i) => {
      if (i.dataset.node === 'section') {
        return;
      }

      i.addEventListener('change', function() {
        if (this.dataset.node === 'image') {
          this.setAttribute('value', this.dataset.output);
        } else {
          this.setAttribute('value', this.value);
        }

        _this.output();
      }, false);
    });
  };

  output() {
    const dataNode = this.querySelectorAll('[data-node]');
    const resObj = {};
    dataNode.forEach((i) => {
      if (i.dataset.node === 'section') {
        resObj[i.dataset.node] = i.dataset.name;
      } else if (i.dataset.node === 'image') {
        resObj[i.dataset.node] = i.dataset.output;
      } else {
        resObj[i.dataset.node] = i.value;
      }
    });

    this.setAttribute('data-output', JSON.stringify(resObj));
  };

  componentSelect() {
    return html`
      <label class="component-control__label">Component</label>
      <select data-node="component">
        <option name="media-object" value="media-object">media-object</option>
        <option name="media-object-reverse" value="media-object-reverse">media-object-reverse</option>
        <option name="hero-main" value="hero-main">hero-main</option>
      </select>
    `;
  };

  titleInput() {
    return html`
      <label class="component-control__label">Title</label>
      <input data-node="title" type="text" value="${this.data().title}" />
    `;
  };

  ctaTextInput() {
    return html`
      <label class="component-control__label">Button Text</label>
      <input data-node="cta-text" type="text" value="${this.data().ctaText}" />
    `;
  };

  ctaLinkInput() {
    return html`
      <label class="component-control__label">Button Link</label>
      <input data-node="cta-link" type="text" value="${this.data().ctaLink}" />
    `;
  };

  imageInput() {
    return html`
      <label class="component-control__label">Image</label>
      <image-input
        data-node="image"
        data-image-url="${this.props('data-image')}"
      >
      </image-input>
    `;
  };

  bodyInput() {
    return html`
      <label class="component-control__label">Body</label>
      <textarea data-node="body" id="" name="" rows="5">${this.data().body}</textarea>
    `;
  };

  controlToggle() {
    const header = this.querySelectorAll('.component-control__toggle')[0];
    const inputs = this.querySelectorAll('.component-control__input-group')[0];
    const _this = this;

    let focusState = false;

    header.addEventListener('click', function() {
      this.classList.toggle('component-control__toggle--opened');
      inputs.classList.toggle('component-control__input-group--opened');

      if (focusState === false) {
        _this.focus();
        focusState = true;
      } else {
        _this.unFocus();
        focusState = false;
      }

    }, false);
  };


  focus() {
    const uid = this.props('data-uid').replace(' ', '_');
    const targetNode = document.querySelectorAll(`.mock-page [data-uid="${uid}"] > *`)[0];
    targetNode.setAttribute('data-name', uid);
    targetNode.classList.add('component-focus');
    targetNode.scrollIntoView({
      behavior: "smooth"
    });

    const header = this.querySelectorAll('header')[0];
    header.classList.add('component-control__header--highlight');
  };

  unFocus() {
    const uid = this.props('data-uid').replace(' ', '_');
    const targetNode = document.querySelectorAll(`.mock-page [data-uid="${uid}"] > *`)[0];
    targetNode.classList.remove('component-focus');

    const header = this.querySelectorAll('header')[0];
    header.classList.remove('component-control__header--highlight');
  };

  template() {
    return html`
        <section class="component-control">
          <header class="component-control__header" data-node="section" data-name="${this.data().sectionName}">
            <span class="component-control__header-text">
              ${this.data().sectionName}
            </span>
            <span class="component-control__toggle">
              <span class="component-control__btn-open">
                ${this.iconChevronDown()}
              </span>
              <span class="component-control__btn-close">
                ${this.iconChevronUp()}
              </span>
            </span>
          </header>

          <div class="component-control__input-group">
            ${this.componentSelect()}
            ${this.titleInput()}
            ${this.ctaTextInput()}
            ${this.ctaLinkInput()}
            ${this.imageInput()}
            ${this.bodyInput()}
            <div class="component-control__btn-group">
              <button data-control-name="${this.props('data-uid')}" class="component-control__btn-save">Save</button>
            </div>
          </div>

        </section>
    `;
  };

  connected() {
    this.setDefaultComponent();
    this.output();
    this.controlListener();
    this.controlToggle();
  };
};

customElements.define('component-control', ComponentControl);


