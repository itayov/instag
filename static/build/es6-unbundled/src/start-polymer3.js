define(["../node_modules/@polymer/polymer/polymer-element.js","../node_modules/@polymer/polymer/lib/elements/dom-if.js","../node_modules/@polymer/paper-checkbox/paper-checkbox.js","../node_modules/@polymer/polymer/lib/utils/settings.js","../node_modules/@polymer/font-roboto/roboto.js","../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js","../node_modules/@polymer/paper-item/paper-item.js","../node_modules/@polymer/paper-listbox/paper-listbox.js","../node_modules/@polymer/iron-icons/iron-icons.js","../node_modules/@polymer/paper-card/paper-card.js","../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../node_modules/@polymer/app-layout/app-layout.js","../node_modules/@polymer/app-layout/app-header/app-header.js","../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js","../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../node_modules/@polymer/paper-input/paper-input.js"],function(_polymerElement,_domIf,_paperCheckbox,_settings,_roboto,_paperDropdownMenu,_paperItem,_paperListbox,_ironIcons,_paperCard,_paperIconButton,_appScrollEffects,_appLayout,_appHeader,_appHeaderLayout,_appToolbar,_paperInput){"use strict";/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */ // Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
class StartPolymer3 extends _polymerElement.PolymerElement{static get properties(){return{message:{type:String,value:""},pie:{type:Boolean,value:!1,observer:"togglePie"},loadComplete:{type:Boolean,value:!1}}}constructor(){// If you override the constructor, always call the 
// superconstructor first.
super();// Resolve warning about scroll performance 
// See https://developers.google.com/web/updates/2016/06/passive-event-listeners
(0,_settings.setPassiveTouchGestures)(!0);this.message="Hello World! I'm a Polymer element :)"}ready(){// If you override ready, always call super.ready() first.
super.ready();// Output the custom element's HTML tag to the browser console.
// Open your browser's developer tools to view the output.
console.log(this.tagName)}static get template(){// Template getter must return an instance of HTMLTemplateElement.
// The html helper function makes this easy.
return _polymerElement.html`
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
    `}valueChanged(e){console.log(e.detail.value)}}// Register the element with the browser.
customElements.define("start-polymer3",StartPolymer3)});