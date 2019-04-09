/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

import '@polymer/font-roboto/roboto.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-input/paper-input.js';

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      pie: {
        type: Boolean,
        value: false,
        observer: 'togglePie'
      },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    // If you override the constructor, always call the 
    // superconstructor first.
    super();
    // Resolve warning about scroll performance 
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
    setPassiveTouchGestures(true);
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  ready(){
    // If you override ready, always call super.ready() first.
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    console.log(this.tagName);
  }

  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <style>        
        body {
          margin: 0px;
          font-family: 'Roboto', 'Noto', sans-serif;
          background-color: #eee;
        }
          
        paper-card {
            width: 190px;
            margin: 7px;
        }

        paper-dropdown-menu {
          width: 100px;
        }

        .flex {
          @apply --layout-flex;
        }

        .justified {
          @apply --layout-justified;
        }

        .dark {
          background: var(--paper-blue-grey-500);
        }
        paper-card.dark, paper-card.amber, paper-card.lime, paper-card.cyan {
          color: white;
          --paper-card-header-color: white;
        }

        paper-icon-button {
          color: var(--paper-grey-600);
        }

        paper-icon-button.white {
          color: white !important;
        }
        
        app-header {
          background-color: #4285f4;
          color: #fff;
          font-family: 'Roboto', 'Noto', sans-serif;
        }
    
        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
    
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
          font-family: 'Roboto', 'Noto', sans-serif;
        }
      </style>

      <app-drawer-layout>
    
        <app-header-layout>
    
          <app-header slot="header" fixed effects="waterfall">
            <app-toolbar>
              <div main-title>Installs</div>
              <paper-input label="Search" id="searchInput" on-change="change" on-value-changed="valueChanged" value="{{value}}" no-label-float>
                <iron-icon icon="search" slot="prefix"></iron-icon> 
              </paper-input>
            </app-toolbar>
          </app-header>
     
          <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu close-on-activate label="Version">
                <paper-listbox slot="dropdown-content" close-on-activate selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
          
                <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu label="Version">
                <paper-listbox slot="dropdown-content" selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
          
                <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu label="Version">
                <paper-listbox slot="dropdown-content" selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
          
                <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu label="Version">
                <paper-listbox slot="dropdown-content" selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
          
                <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu label="Version">
                <paper-listbox slot="dropdown-content" selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
          
                <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu label="Version">
                <paper-listbox slot="dropdown-content" selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
          
                <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu label="Version">
                <paper-listbox slot="dropdown-content" selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
          
                <paper-card heading="Chrome" image="src/chrome_logo.png" alt="Trip" class="white" style="margin-right:4px;">
            <div class="card-actions horizontal justified">
              <paper-icon-button icon="icons:file-download"></paper-icon-button>
              <paper-dropdown-menu label="Version">
                <paper-listbox slot="dropdown-content" selected="0">
                  <paper-item>2.6</paper-item>
                  <paper-item>2.3</paper-item>
                  <paper-item>1.2</paper-item>
                  <paper-item>1.1</paper-item>
                </paper-listbox>
              </paper-dropdown-menu>
              </div>
          </paper-card>
      
        </app-header-layout>
    
      </app-drawer-layout>
    `;
  }

  valueChanged(e) {
    console.log(e.detail.value)
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
