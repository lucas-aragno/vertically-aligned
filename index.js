class VerticallyAligned extends HTMLElement {
  constructor () {
    super()
    let innerStyles = this.noFlex
      ? `
      .vertical-container {
        height: 100vh;
        display:table;
      }

      .vertical-content {
        vertical-align: middle;
        display:table-cell;
      }
    `
      : `
      .vertical {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }
    `

    let html = this.noFlex
      ? `<div class="vertical-container">
       <div class="vertical-content">
         <slot></slot>
       </div>
     </div>`
      : `
      <div class="vertical">
        <slot></slot>
      </div>
    `

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        ${innerStyles}
      </style>
      ${html}
    `
  }

  get noFlex () {
    return this.getAttribute('noFlex') === ''
  }

  set noFlex (newNoFlex) {
    this.setAttribute('noFlex', newNoFlex)
  }
}

customElements.define('vertically-aligned', VerticallyAligned)
