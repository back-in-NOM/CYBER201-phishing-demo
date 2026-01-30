import { useState, useEffect } from 'react'
import './App.css'
import AdUnit from './components/AdUnit'

// SVG Icons for the links
const PersonAddIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.164 14.786H6.518c-.9 0-1.647.754-1.647 1.711v3.76c0 .41-.34.743-.747.743h-.036a.749.749 0 0 1-.747-.744v-3.759c0-1.774 1.42-3.211 3.177-3.211h3.646c.898 0 .898 1.5 0 1.5zM3.341 20.25c0-.414.346-.75.751-.75h12.475c.415 0 .752.333.752.75 0 .414-.346.75-.752.75H4.092a.749.749 0 0 1-.751-.75zm9.318-6.247c0-.414.344-.75.753-.75h6.494a.75.75 0 0 1 .753.75c0 .414-.344.75-.753.75h-6.494a.75.75 0 0 1-.753-.75zm4 4a.756.756 0 0 1-.75-.753v-6.495a.75.75 0 0 1 .75-.752c.414 0 .75.344.75.752v6.495a.75.75 0 0 1-.75.753zM12 11.783c-2.495 0-4.473-1.986-4.473-4.392C7.527 4.986 9.505 3 12 3s4.473 1.986 4.473 4.391c0 2.406-1.978 4.392-4.473 4.392zM12 4.5c-1.632 0-2.943 1.296-2.943 2.891 0 1.596 1.311 2.892 2.943 2.892 1.632 0 2.943-1.296 2.943-2.892C14.943 5.796 13.632 4.5 12 4.5z"/>
  </svg>
)

const HelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.772 9.672h1.336c.041-.557.24-.999.597-1.324.357-.326.83-.489 1.418-.489.584 0 1.049.16 1.395.477.346.318.52.719.52 1.203 0 .417-.097.766-.29 1.047-.192.281-.515.56-.968.836-.537.318-.933.664-1.188 1.039-.255.375-.38.82-.375 1.336v.719h1.367v-.508c0-.412.089-.749.266-1.012.177-.263.513-.54 1.008-.832.5-.302.897-.673 1.191-1.113.294-.44.442-.968.442-1.582 0-.808-.306-1.48-.918-2.02-.612-.539-1.41-.808-2.395-.808-1.099 0-1.93.294-2.496.882-.565.589-.868 1.305-.91 2.149zm3.234 8.469c.318 0 .577-.102.778-.305.2-.203.3-.464.3-.781 0-.323-.1-.586-.3-.79-.2-.203-.46-.304-.778-.304-.317 0-.578.101-.781.305-.203.203-.305.466-.305.789 0 .317.102.578.305.78.203.204.464.306.781.306zM12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const LanguageIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.251 15.256c-.992-1-2.413-2.37-2.719-2.662l.3-.334c.933-1.05 1.566-1.906 2.197-3.038.539-.968 1.049-2.108 1.567-3.522H17.5V4.2h-7.25V2h-1.5v2.2H1.5v1.5h11.494c-.425 1.106-.843 2.015-1.275 2.792-.572 1.027-1.142 1.797-2.009 2.772l-.22.246C8.33 10.24 7.508 9.1 7.01 8h-1.62c.549 1.509 1.565 2.975 3.081 4.618a84.95 84.95 0 0 1-1.727 1.754l-.231.23a213.472 213.472 0 0 1-3.24 3.128l1.03 1.091a130.917 130.917 0 0 0 1.02-.972c.764-.733 1.529-1.475 2.243-2.18l.234-.232a87.831 87.831 0 0 0 1.716-1.74c.457.439 2.313 2.23 3.146 3.098l.59-1.539zM20.707 22h1.967l-4.325-11.978h-2.008L12.016 22h1.934l1.096-3.237h4.565L20.707 22zm-3.404-9.986h.05l1.785 5.255h-3.62l1.785-5.255z"/>
  </svg>
)

// Device/OS Icons for the dashboard
const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67c-.19-.29-.51-.38-.83-.22-.31.16-.43.54-.26.85L6.4 9.48A10.78 10.78 0 002 18h20a10.78 10.78 0 00-4.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
  </svg>
)

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.135-.12-.2-.18-.264-.03-.03-.06-.06-.086-.068-.07-.06-.14-.135-.224-.135-.09-.003-.18.066-.27.065h-.003c-.12.135-.18.2-.36.266-.18.065-.27.065-.45.135-.12.065-.18.065-.27.135-.06 0-.12.002-.18.003h-.003c-.18 0-.36.065-.42.135v.06c-.03 0-.06-.003-.09-.003-.18 0-.42.002-.63.003-.21.002-.42.002-.6.002-.03-.135-.09-.2-.15-.266-.09-.065-.18-.135-.39-.135h-.09c-.06.003-.12.003-.18.066a.36.36 0 01-.39.132c.09-.203.18-.335.12-.468-.12-.27-.39-.4-.66-.534-.27-.135-.57-.135-.72-.27a.758.758 0 01-.27-.6c0-.202.09-.335.18-.468.07-.135.13-.202.18-.268.05-.066.1-.066.05-.2v-.003c-.16-.066-.39-.066-.63.002a1.28 1.28 0 00-.57.467 1.093 1.093 0 00-.18.668v.002c0 .2.03.333.05.466.008.054.01.103.018.153a.27.27 0 00-.093.117c-.09.202-.06.468.15.734.12.2.33.334.57.468.24.135.48.2.69.2-.02-.066-.03-.135-.03-.2a.818.818 0 01.3-.6c-.24.066-.42.135-.57.135-.18 0-.42-.066-.57-.2-.18-.133-.21-.333-.15-.533v-.003c.03-.135.09-.2.21-.267a.77.77 0 01.36-.066c.21 0 .36.066.51.135v-.003c.03.065.09.135.09.2v.066c.03 0 .03.065.06.065 0 .06.03.065.03.13v.067c.03.066.03.133.09.2.06.066.09.133.21.2h.06l.06.003c.03 0 .09.003.15.003.03 0 .06 0 .09-.002.03 0 .06-.003.09-.003.03 0 .06-.003.09-.003.06-.003.12-.003.15-.066.06-.066.09-.133.09-.2v-.067l-.03-.132v-.067a.572.572 0 00-.12-.2.31.31 0 00-.15-.133h-.06c-.06-.003-.12-.003-.18-.003a.605.605 0 00-.18.066c-.09.066-.12.135-.18.135-.05 0-.11.003-.15 0l-.03-.003-.06-.067c-.06-.066-.09-.2-.03-.333.06-.135.18-.267.39-.4a1.04 1.04 0 01.57-.133h.06c.24 0 .42.065.57.133.18.066.3.2.39.334.09.135.15.267.18.4l.03.135v.067c0 .066 0 .133-.03.2v.003a.28.28 0 01-.09.133c-.06.066-.12.066-.21.133h-.24c-.03 0-.06 0-.09.002-.03.003-.06.003-.12.003-.03 0-.06.003-.09.003h-.09c-.03 0-.09.066-.12.133 0 .066.03.135.09.2.06.066.12.133.24.133h.09c.09 0 .18-.003.27-.003.18 0 .36-.065.48-.135.12-.065.18-.133.21-.2.06-.066.06-.135.06-.2v-.003c0-.065.03-.2.03-.2l.03-.132v-.003c.03-.066.03-.135.03-.2v-.003c0-.065 0-.135-.03-.2v-.067c-.03-.065-.03-.133-.06-.2-.06-.133-.12-.2-.21-.333a1.12 1.12 0 00-.42-.333c-.15-.133-.36-.2-.6-.267a1.637 1.637 0 00-.63-.066c-.03 0-.06 0-.09.002h-.12c-.09.003-.18.003-.27.067-.12.065-.24.133-.36.267a1.005 1.005 0 00-.24.4c-.06.133-.06.267-.06.4.03.265.09.4.15.533-.03.066-.06.068-.09.135l-.09.135c-.09.133-.21.2-.27.267-.06.065-.12.133-.21.133a.49.49 0 01-.24-.067c-.09-.066-.15-.133-.18-.2a.558.558 0 01-.06-.333v-.003c.03-.2.12-.333.24-.467a.975.975 0 01.45-.267c.21-.065.39-.133.45-.2.09-.065.09-.2.06-.333-.03-.133-.12-.267-.24-.4-.18-.133-.39-.2-.63-.267-.24-.066-.48-.066-.69-.066-.09 0-.18.003-.27.003h-.09c-.18.065-.3.133-.42.2a.858.858 0 00-.24.267.645.645 0 00-.09.333v.002c0 .135.03.267.09.4.06.133.15.2.27.267.12.065.24.133.39.133h.15c.03 0 .06-.003.09-.003-.03.066-.06.135-.09.2a.593.593 0 01-.24.2c-.12.068-.24.068-.36.135h-.18c-.18 0-.36.065-.48.2-.12.133-.18.267-.18.4v.067c0 .065.03.133.06.2.06.2.15.333.3.467.15.133.33.2.54.267.21.066.42.066.6.066h.18a1.08 1.08 0 00.51-.135c.15-.065.27-.2.33-.333.09-.133.12-.267.12-.4v-.2a.592.592 0 00-.06-.2c.12 0 .21-.003.3-.003.06 0 .12 0 .15-.003h.15c.09 0 .18 0 .27-.065.09-.066.18-.133.21-.2a.592.592 0 00.06-.333c-.03-.135-.09-.267-.18-.4-.09-.133-.24-.267-.42-.333-.18-.133-.39-.2-.63-.267-.09-.003-.18-.003-.27-.003h-.24c-.06.003-.12.003-.18.003-.03 0-.09.003-.12.003-.03 0-.06-.003-.09-.003h-.06c-.09 0-.15-.003-.21-.066-.09-.066-.12-.133-.15-.2v-.067c0-.133.06-.2.12-.267.06-.066.12-.066.21-.133h.3c.15 0 .27.067.36.067.09.003.12-.065.15-.133a.27.27 0 00-.03-.2c-.03-.066-.09-.133-.15-.2a.59.59 0 00-.27-.133c-.09-.066-.18-.066-.33-.066h-.03c-.03 0-.06 0-.09.002h-.12c-.06.003-.15.003-.21.067-.06.065-.12.133-.18.2-.06.065-.12.2-.12.333-.03.133 0 .267.06.4.03.065.06.133.12.2-.12.065-.24.2-.3.267-.09.133-.12.267-.12.4v.003c0 .133.03.267.09.4.06.133.15.2.3.267.12.065.27.133.45.133h.03c.06 0 .12 0 .18-.003.06 0 .12-.003.15-.003h.09c.06 0 .09-.003.15-.003.06-.003.12-.003.18-.067.03-.066.06-.133.06-.2 0-.133-.03-.2-.09-.267a.358.358 0 00-.18-.133c-.09-.066-.18-.066-.3-.066h-.06c-.03 0-.06.002-.09.002-.06.003-.09.003-.15.003-.03.003-.09.003-.12.003-.06.003-.12.003-.15.067-.03.066-.03.133 0 .2l.03.065c.03.003.09.003.15.003.03 0 .06-.003.09-.003h.12c.03 0 .06 0 .09-.003.03 0 .06-.003.09-.003.03 0 .06.003.09.003h.09c.03 0 .06.003.09.003.03.003.06.003.09.003.09.066.15.133.18.2.03.065.03.133.03.2v.066c-.03.066-.06.135-.12.2-.06.066-.15.066-.27.133h-.12a.56.56 0 01-.21-.066c-.06-.067-.12-.133-.12-.2v-.068c0-.065.03-.133.09-.2.06-.066.12-.066.21-.133h.12c.03.003.06.003.09.003h.12c.03 0 .06-.003.09-.003.06 0 .09-.003.15-.003.06-.003.09-.003.15-.067.03-.066.03-.133 0-.2-.03-.065-.06-.2-.15-.267-.09-.066-.18-.133-.33-.2a.869.869 0 00-.39-.066c-.06 0-.09.003-.15.003h-.12c-.06.003-.12.003-.15.067-.03.066-.06.133-.06.2v.003c0 .065.03.133.06.2.03.065.09.133.15.2.09.066.18.133.3.133h.15a.26.26 0 00.15-.067c.03-.066.03-.133.03-.2 0-.065-.03-.2-.09-.267a.359.359 0 00-.18-.133c-.09-.066-.18-.133-.33-.133h-.09c-.03.003-.09.003-.12.003-.03.003-.09.003-.15.003-.06.003-.12.003-.15.067-.03.066-.03.133 0 .2.03.066.06.133.12.2.06.065.15.133.27.133h.09z"/>
  </svg>
)

const ChromeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z"/>
  </svg>
)

const SafariIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm3.894-14.036l-5.63 2.458-2.458 5.63 5.63-2.458 2.458-5.63zm-3.292 4.634a.6.6 0 1 1-.849-.849.6.6 0 0 1 .849.849z"/>
  </svg>
)

const FirefoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 0 1-.13-.24 2.118 2.118 0 0 1-.172-.46.03.03 0 0 0-.027-.03.038.038 0 0 0-.021 0l-.006.001-.006.001-.006.002-.011.002-.015.005-.012.002-.012.003-.022.005c-.018.004-.036.01-.055.014l-.016.004-.032.008-.05.015-.024.006a2.058 2.058 0 0 0-.26.085 4.787 4.787 0 0 0-.76.387c-.483.287-.98.69-1.423 1.09-.443.399-.83.772-1.16 1.084l-.022.02c-.305.286-.571.545-.8.78-.063.063-.122.124-.177.182l-.027.027c-.323.334-.547.605-.695.822-.062.088-.12.17-.165.246l-.007.011v.001c-.073.126-.12.232-.145.31l-.002.008v.002l-.002.007-.003.008c-.394.902-.53 1.805-.503 2.625.015.46.074.89.172 1.29l.016.055c.036.135.08.265.127.4.047.132.098.263.155.392.057.128.118.255.185.379l.094.18c.248.46.557.893.927 1.29l.002.003c.37.395.8.747 1.284 1.05.484.304 1.023.559 1.607.763.584.203 1.214.356 1.879.455.664.099 1.363.145 2.09.136a10.067 10.067 0 0 0 .886-.058c.293-.03.583-.071.87-.125.286-.054.57-.12.848-.197a8.764 8.764 0 0 0 1.61-.593 9.057 9.057 0 0 0 1.488-.863c.473-.34.917-.724 1.326-1.149.41-.426.784-.893 1.117-1.396.332-.503.624-1.043.869-1.613.245-.57.443-1.17.59-1.795a10.1 10.1 0 0 0 .273-2.254v-.003c.043-1.429-.273-2.893-.84-4.242zm-7.063 9.087c-.063.078-.255.196-.255.196a6.93 6.93 0 0 1-.605.32c-.124.055-.254.1-.382.148-.118.043-.236.083-.356.12-.16.05-.323.094-.49.134-.167.04-.336.076-.508.107-.172.032-.345.058-.52.08-.175.021-.351.037-.528.049-.176.011-.353.017-.53.017-.354 0-.707-.022-1.052-.066-.346-.044-.684-.109-1.01-.194a7.39 7.39 0 0 1-.952-.298 6.813 6.813 0 0 1-.878-.398c-.282-.158-.55-.337-.8-.536-.25-.198-.484-.416-.698-.653a5.967 5.967 0 0 1-.57-.737 5.466 5.466 0 0 1-.447-.827c-.13-.295-.236-.602-.317-.92a5.15 5.15 0 0 1-.164-.964 5.47 5.47 0 0 1-.005-.487c.004-.16.014-.32.032-.48.018-.16.044-.318.076-.476.033-.157.073-.313.12-.466.047-.154.101-.305.162-.454.061-.149.128-.295.202-.438.073-.144.153-.284.24-.421.087-.137.18-.27.28-.398l.13-.16c.046-.056.094-.112.144-.166.022-.025.044-.049.066-.074.045-.05.09-.098.137-.146.046-.048.094-.094.141-.14a6.968 6.968 0 0 1 1.46-1.1c.087-.05.175-.097.265-.141.09-.045.18-.086.272-.126.092-.04.184-.078.278-.114.094-.036.189-.07.285-.101.096-.031.193-.06.29-.087l.147-.039c.098-.024.196-.046.295-.065l.075-.013c.099-.016.198-.03.298-.042l.025-.003c.1-.01.2-.018.3-.024.1-.006.2-.009.3-.009.2 0 .4.01.6.03.199.02.398.05.594.09.097.02.194.043.29.068.096.025.19.053.284.083.094.03.186.064.278.1l.137.054c.09.037.18.077.268.12.088.043.175.088.26.136.17.096.334.202.49.32.156.117.305.244.445.381.14.137.272.284.394.44.122.156.236.32.34.492.103.173.197.352.28.538.084.185.158.376.222.573.064.196.117.398.161.604.044.206.078.416.102.63.024.214.038.43.043.65a6.02 6.02 0 0 1-.177 1.564 5.85 5.85 0 0 1-.521 1.433 6.255 6.255 0 0 1-.85 1.26 7.052 7.052 0 0 1-1.13 1.037 7.88 7.88 0 0 1-1.35.795c-.235.11-.478.206-.727.29-.124.042-.25.08-.377.115-.063.018-.127.034-.19.05z"/>
  </svg>
)

const EdgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.86 17.86q.14 0 .25.12.1.13.1.25t-.11.33l-.32.46-.43.53-.44.5q-.21.25-.38.42l-.22.23q-.58.53-1.34 1.04-.76.51-1.6.91-.86.4-1.74.64t-1.67.24q-.9 0-1.69-.28-.8-.28-1.48-.78-.68-.5-1.22-1.17-.53-.66-.92-1.44-.38-.77-.58-1.6-.2-.83-.2-1.67 0-1 .32-1.96.33-.97.87-1.8.14.95.55 1.77.41.82 1.02 1.5.6.68 1.38 1.21.78.54 1.64.9.86.36 1.77.56.92.2 1.8.2 1.54 0 2.94-.55zm-8.27 1.7q-.36-.07-.7-.18-.34-.1-.68-.25-.33-.14-.64-.32-.32-.18-.6-.39.58-.39 1.06-.84.49-.46.87-.97.38-.5.65-1.07.28-.55.44-1.13-.15.07-.29.12-.13.05-.28.09-.47.12-.96.17-.48.05-.97.05-.51 0-1.03-.05-.51-.05-1.02-.15-.5-.1-1-.24-.49-.14-.97-.32l-.04.02q-.53-.2-1.02-.46-.49-.26-.94-.58-.44-.32-.84-.7-.4-.37-.73-.79-.33-.42-.6-.89-.27-.47-.47-.96-.2-.49-.32-1.01-.12-.51-.15-1.03 0-1.22.43-2.33.44-1.12 1.2-2.04.75-.91 1.76-1.58Q8.93.54 10.14.21q-.72.17-1.39.5-.66.34-1.23.8-.57.46-1.04 1.02-.47.56-.82 1.19-.34.64-.55 1.33-.21.69-.28 1.4-.02.21-.02.42 0 .18.01.36.07 1.65.69 3.14.62 1.5 1.66 2.71 1.03 1.2 2.4 2.06 1.38.86 2.96 1.3.45.12.93.2.47.07.96.1.16 0 .32.01h.32q.93 0 1.77-.16.85-.16 1.61-.45.77-.29 1.44-.69.67-.39 1.21-.87-.33.14-.68.23-.35.1-.71.15-.36.04-.73.04-.49 0-.96-.07zM12 0Q9.19 0 6.72 1.05 4.25 2.11 2.39 3.97 .54 5.82-.51 8.29-1.56 10.76-1.56 13.57q0 2.65.98 5.06.97 2.41 2.7 4.32 1.72 1.9 4.06 3.09Q8.52 27.23 11.25 27.5q-.65-.07-1.29-.21-.64-.14-1.25-.35-.62-.21-1.2-.49-.58-.27-1.13-.61-.55-.34-1.05-.73-.5-.4-.94-.85-.44-.46-.82-.96t-.69-1.04q-.3-.53-.53-1.1-.23-.56-.39-1.14-.15-.58-.22-1.18-.08-.59-.08-1.2 0-1.45.37-2.82.37-1.36 1.04-2.59.67-1.23 1.62-2.29.95-1.06 2.11-1.88 1.15-.82 2.47-1.38 1.32-.56 2.75-.84-.32.06-.63.15-.31.08-.61.19l-.6.22q-.29.12-.56.27-.27.15-.53.32-.25.17-.48.36-.23.2-.44.41-.21.21-.4.45-.18.24-.33.5-.16.25-.29.52-.12.27-.22.55-.09.29-.15.58-.06.3-.08.6-.03.29-.03.59 0 1.15.36 2.24.37 1.08 1.01 2.02.64.93 1.5 1.67.87.75 1.9 1.26 1.02.51 2.15.76 1.13.26 2.3.26.82 0 1.58-.12.75-.13 1.45-.36.7-.24 1.33-.56.63-.33 1.18-.74.55-.41 1.01-.9.46-.48.83-1.02-.07.52-.22 1-.14.49-.35.93-.22.44-.5.84-.29.4-.63.75-.34.35-.73.65-.39.3-.82.54-.43.23-.9.41-.47.18-.97.29-.5.11-1.02.15-.1.01-.2.01h-.2q-.89 0-1.77-.18-.87-.18-1.7-.52-.83-.34-1.58-.84-.76-.5-1.4-1.13-.63-.64-1.12-1.4-.5-.76-.84-1.61-.33-.85-.49-1.76-.16-.9-.14-1.83.06-1.61.62-3.06.55-1.45 1.5-2.63.94-1.18 2.22-2.04 1.27-.86 2.78-1.32.76-.24 1.55-.36.79-.12 1.59-.12 1.35 0 2.59.33 1.25.34 2.35.95 1.1.61 2.02 1.46.91.85 1.6 1.89.68 1.04 1.11 2.23.42 1.18.58 2.46 0 .18.01.35.01.17.01.35 0 1.65-.42 3.18-.41 1.52-1.17 2.87-.76 1.34-1.83 2.46-1.08 1.12-2.4 1.95-1.33.84-2.83 1.35-1.5.52-3.1.68-.1.01-.2.02-.1 0-.2.01h-.4q-.18 0-.36-.01-.18-.01-.36-.02.2.01.4.02.2 0 .4 0 3.12 0 5.88-1.16 2.76-1.17 4.84-3.15 2.07-1.98 3.31-4.66Q24 15.7 24 12.5q0-2.6-.99-4.95-.99-2.34-2.71-4.14Q18.58 1.62 16.21.81 13.84 0 11.19 0H12z"/>
  </svg>
)

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
  </svg>
)

const DesktopIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
  </svg>
)

const TabletIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.5 0h-14A2.5 2.5 0 0 0 2 2.5v19A2.5 2.5 0 0 0 4.5 24h14a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/>
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
  </svg>
)

const ScreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h2v2H4V6zm0 4h2v2H4v-2zm0 4h2v2H4v-2zm14-8h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
  </svg>
)

const FingerprintIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/>
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
)

const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
  </svg>
)

const TimeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
)

const BlockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/>
  </svg>
)

// ============================================
// FINGERPRINTING FUNCTIONS
// ============================================

// Canvas Fingerprint - renders a test pattern and hashes the result
const getCanvasFingerprint = () => {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 50;
    const ctx = canvas.getContext('2d');

    // Draw text with various styles
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('Cwm fjordbank glyphs vext quiz', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('Cwm fjordbank glyphs vext quiz', 4, 17);

    // Add some shapes
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    const dataURL = canvas.toDataURL();
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < dataURL.length; i++) {
      const char = dataURL.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).padStart(8, '0');
  } catch (e) {
    return 'unavailable';
  }
};

// Audio Fingerprint - uses AudioContext oscillator
const getAudioFingerprint = async () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return 'unsupported';

    const context = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);
    const oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(10000, context.currentTime);

    const compressor = context.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-50, context.currentTime);
    compressor.knee.setValueAtTime(40, context.currentTime);
    compressor.ratio.setValueAtTime(12, context.currentTime);
    compressor.attack.setValueAtTime(0, context.currentTime);
    compressor.release.setValueAtTime(0.25, context.currentTime);

    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);

    const buffer = await context.startRendering();
    const data = buffer.getChannelData(0);

    // Sum a portion of the audio data
    let sum = 0;
    for (let i = 4500; i < 5000; i++) {
      sum += Math.abs(data[i]);
    }

    return sum.toString().replace('.', '').substring(0, 8);
  } catch (e) {
    return 'unavailable';
  }
};

// WebRTC IP Leak Detection
const getWebRTCIPs = () => {
  return new Promise((resolve) => {
    const ips = { local: [], public: [] };

    try {
      const RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
      if (!RTCPeerConnection) {
        resolve(ips);
        return;
      }

      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
      });

      pc.createDataChannel('');

      const timeout = setTimeout(() => {
        pc.close();
        resolve(ips);
      }, 3000);

      pc.onicecandidate = (event) => {
        if (!event.candidate) {
          clearTimeout(timeout);
          pc.close();
          resolve(ips);
          return;
        }

        const candidate = event.candidate.candidate;
        const ipMatch = candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}|([a-f0-9]{1,4}:){7}[a-f0-9]{1,4}/i);

        if (ipMatch) {
          const ip = ipMatch[0];
          // Check if it's a local IP
          if (ip.match(/^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.|127\.|::1|fe80:)/i)) {
            if (!ips.local.includes(ip)) ips.local.push(ip);
          } else {
            if (!ips.public.includes(ip)) ips.public.push(ip);
          }
        }
      };

      pc.createOffer().then(offer => pc.setLocalDescription(offer)).catch(() => {
        clearTimeout(timeout);
        resolve(ips);
      });
    } catch (e) {
      resolve(ips);
    }
  });
};

// Ad Blocker Detection using bait elements
const detectAdBlocker = () => {
  return new Promise((resolve) => {
    const bait = document.createElement('div');
    bait.className = 'adsbox ad-banner pub_300x250 textAd banner-ad';
    bait.style.cssText = 'width: 1px; height: 1px; position: absolute; left: -10000px; top: -10000px;';
    bait.textContent = '\u00A0'; // Non-breaking space using textContent (safe)
    document.body.appendChild(bait);

    setTimeout(() => {
      const detected = bait.offsetHeight === 0 ||
                       bait.offsetWidth === 0 ||
                       window.getComputedStyle(bait).display === 'none' ||
                       window.getComputedStyle(bait).visibility === 'hidden';
      document.body.removeChild(bait);
      resolve(detected);
    }, 100);
  });
};

// VPN Detection Heuristics
const detectVPN = (ipData, webrtcIPs, browserTimezone) => {
  const indicators = [];
  let likelyVPN = false;

  if (ipData) {
    // 1. Timezone mismatch
    const ipTimezone = ipData.timezone;
    if (ipTimezone && browserTimezone && ipTimezone !== browserTimezone) {
      indicators.push(`Timezone mismatch: IP says ${ipTimezone}, browser says ${browserTimezone}`);
      likelyVPN = true;
    }

    // 2. WebRTC leak check - public IP differs from geolocation API IP
    if (webrtcIPs.public.length > 0) {
      const webrtcPublic = webrtcIPs.public[0];
      if (webrtcPublic !== ipData.ip) {
        indicators.push(`WebRTC IP (${webrtcPublic}) differs from API IP (${ipData.ip})`);
        likelyVPN = true;
      }
    }

    // 3. Suspicious ISP keywords
    const suspiciousKeywords = ['vpn', 'proxy', 'datacenter', 'hosting', 'aws', 'azure', 'google cloud', 'digitalocean', 'linode', 'vultr', 'hetzner', 'ovh'];
    const isp = (ipData.isp || '').toLowerCase();
    const org = (ipData.org || '').toLowerCase();
    const combined = isp + ' ' + org;

    for (const keyword of suspiciousKeywords) {
      if (combined.includes(keyword)) {
        indicators.push(`Suspicious ISP/Org: contains "${keyword}"`);
        likelyVPN = true;
        break;
      }
    }
  }

  return { likelyVPN, indicators };
};

// Media Query Preferences
const getMediaQueryPreferences = () => {
  const prefs = {};

  // prefers-reduced-motion
  prefs.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // prefers-color-scheme
  prefs.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // prefers-contrast
  if (window.matchMedia('(prefers-contrast: more)').matches) {
    prefs.contrast = 'more';
  } else if (window.matchMedia('(prefers-contrast: less)').matches) {
    prefs.contrast = 'less';
  } else {
    prefs.contrast = 'no-preference';
  }

  // dynamic-range (HDR)
  prefs.hdr = window.matchMedia('(dynamic-range: high)').matches;

  // pointer type
  if (window.matchMedia('(pointer: fine)').matches) {
    prefs.pointer = 'fine';
  } else if (window.matchMedia('(pointer: coarse)').matches) {
    prefs.pointer = 'coarse';
  } else {
    prefs.pointer = 'none';
  }

  // hover capability
  prefs.hover = window.matchMedia('(hover: hover)').matches;

  return prefs;
};

// IP Geolocation with fallback chain
const fetchIPData = async () => {
  // Fallback chain: ipwho.is -> freeipapi.com -> ipapi.co
  const apis = [
    {
      url: 'https://ipwho.is/',
      transform: (data) => ({
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        postal: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
        isp: data.connection?.isp || data.org,
        org: data.connection?.org || data.org,
        asn: data.connection?.asn,
        timezone: data.timezone?.id
      })
    },
    {
      url: 'https://freeipapi.com/api/json/',
      transform: (data) => ({
        ip: data.ipAddress,
        city: data.cityName,
        region: data.regionName,
        country: data.countryName,
        postal: data.zipCode,
        latitude: data.latitude,
        longitude: data.longitude,
        isp: data.isp || '',
        org: '',
        asn: '',
        timezone: data.timeZone
      })
    },
    {
      url: 'https://ipapi.co/json/',
      transform: (data) => ({
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        postal: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
        isp: data.org,
        org: data.org,
        asn: data.asn,
        timezone: data.timezone
      })
    }
  ];

  for (const api of apis) {
    try {
      const response = await fetch(api.url);
      if (!response.ok) continue;
      const data = await response.json();
      if (data.ip || data.ipAddress) {
        return api.transform(data);
      }
    } catch (e) {
      console.warn(`IP API ${api.url} failed:`, e.message);
      continue;
    }
  }

  return null;
};

// Collect as much user data as possible
const collectUserData = async () => {
  const data = {
    // Basic browser info
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages?.join(', ') || navigator.language,
    cookiesEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
    onLine: navigator.onLine,

    // Screen info
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    screenAvailWidth: window.screen.availWidth,
    screenAvailHeight: window.screen.availHeight,
    colorDepth: window.screen.colorDepth,
    pixelDepth: window.screen.pixelDepth,
    devicePixelRatio: window.devicePixelRatio,

    // Window info
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,

    // Hardware
    hardwareConcurrency: navigator.hardwareConcurrency || 'Unknown',
    deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown',
    maxTouchPoints: navigator.maxTouchPoints || 0,

    // Time/Location
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    localTime: new Date().toLocaleString(),

    // Storage
    localStorageAvailable: !!window.localStorage,
    sessionStorageAvailable: !!window.sessionStorage,
    indexedDBAvailable: !!window.indexedDB,

    // Features
    webGL: (() => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          return {
            vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown',
            renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown'
          };
        }
      } catch (e) {}
      return { vendor: 'Unknown', renderer: 'Unknown' };
    })(),

    // Page info
    referrer: document.referrer || 'Direct visit',
    currentURL: window.location.href,

    // Connection info (if available)
    connection: (() => {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn) {
        return {
          effectiveType: conn.effectiveType || 'Unknown',
          downlink: conn.downlink ? `${conn.downlink} Mbps` : 'Unknown',
          rtt: conn.rtt ? `${conn.rtt} ms` : 'Unknown',
          saveData: conn.saveData || false
        };
      }
      return null;
    })(),

    // PDF viewer
    pdfViewerEnabled: navigator.pdfViewerEnabled,

    // Media capabilities
    mediaDevices: !!navigator.mediaDevices,

    // Geolocation support
    geolocationSupported: !!navigator.geolocation,

    // Additional navigator properties
    webdriver: navigator.webdriver || false,
    plugins: (() => {
      const plugins = [];
      if (navigator.plugins) {
        for (let i = 0; i < Math.min(navigator.plugins.length, 10); i++) {
          plugins.push(navigator.plugins[i].name);
        }
      }
      return plugins;
    })(),
    bluetoothSupported: !!navigator.bluetooth,
    usbSupported: !!navigator.usb,
    serialSupported: !!navigator.serial,
    userAgentData: navigator.userAgentData ? {
      brands: navigator.userAgentData.brands?.map(b => `${b.brand} ${b.version}`).join(', ') || 'Unknown',
      mobile: navigator.userAgentData.mobile,
      platform: navigator.userAgentData.platform
    } : null,

    // Media query preferences
    mediaPreferences: getMediaQueryPreferences(),

    // Battery (will be fetched async)
    battery: null,

    // IP info (will be fetched async)
    ip: null,

    // Advanced fingerprints (will be fetched async)
    canvasFingerprint: null,
    audioFingerprint: null,

    // WebRTC IPs (will be fetched async)
    webrtcIPs: null,

    // Privacy detection (will be computed async)
    adBlockerDetected: null,
    vpnDetection: null,
  };

  // Try to get battery info
  if (navigator.getBattery) {
    try {
      const battery = await navigator.getBattery();
      data.battery = {
        level: `${Math.round(battery.level * 100)}%`,
        charging: battery.charging,
        chargingTime: battery.chargingTime === Infinity ? 'N/A' : `${battery.chargingTime}s`,
        dischargingTime: battery.dischargingTime === Infinity ? 'N/A' : `${battery.dischargingTime}s`
      };
    } catch (e) {
      data.battery = null;
    }
  }

  // Collect fingerprints and IP data in parallel
  const [ipData, canvasFp, audioFp, webrtcIPs, adBlocker] = await Promise.all([
    fetchIPData(),
    Promise.resolve(getCanvasFingerprint()),
    getAudioFingerprint(),
    getWebRTCIPs(),
    detectAdBlocker()
  ]);

  data.ip = ipData;
  data.canvasFingerprint = canvasFp;
  data.audioFingerprint = audioFp;
  data.webrtcIPs = webrtcIPs;
  data.adBlockerDetected = adBlocker;

  // VPN detection (needs IP data and WebRTC IPs)
  data.vpnDetection = detectVPN(ipData, webrtcIPs, data.timezone);

  return data;
};

// Parse user agent for OS and browser
const parseUserAgent = (ua) => {
  const result = {
    os: 'Unknown',
    osVersion: '',
    browser: 'Unknown',
    browserVersion: '',
    device: 'Desktop'
  };
  
  // Detect OS
  if (/Windows/.test(ua)) {
    result.os = 'Windows';
    const match = ua.match(/Windows NT (\d+\.\d+)/);
    if (match) {
      const versions = { '10.0': '10/11', '6.3': '8.1', '6.2': '8', '6.1': '7' };
      result.osVersion = versions[match[1]] || match[1];
    }
  } else if (/Mac OS X/.test(ua)) {
    result.os = 'macOS';
    const match = ua.match(/Mac OS X (\d+[._]\d+)/);
    if (match) result.osVersion = match[1].replace('_', '.');
  } else if (/iPhone|iPad|iPod/.test(ua)) {
    result.os = 'iOS';
    result.device = /iPad/.test(ua) ? 'Tablet' : 'Mobile';
    const match = ua.match(/OS (\d+_\d+)/);
    if (match) result.osVersion = match[1].replace('_', '.');
  } else if (/Android/.test(ua)) {
    result.os = 'Android';
    result.device = /Mobile/.test(ua) ? 'Mobile' : 'Tablet';
    const match = ua.match(/Android (\d+\.?\d*)/);
    if (match) result.osVersion = match[1];
  } else if (/Linux/.test(ua)) {
    result.os = 'Linux';
  } else if (/CrOS/.test(ua)) {
    result.os = 'Chrome OS';
  }
  
  // Detect Browser
  if (/Edg\//.test(ua)) {
    result.browser = 'Edge';
    const match = ua.match(/Edg\/(\d+)/);
    if (match) result.browserVersion = match[1];
  } else if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) {
    result.browser = 'Chrome';
    const match = ua.match(/Chrome\/(\d+)/);
    if (match) result.browserVersion = match[1];
  } else if (/Safari\//.test(ua) && !/Chrome/.test(ua)) {
    result.browser = 'Safari';
    const match = ua.match(/Version\/(\d+)/);
    if (match) result.browserVersion = match[1];
  } else if (/Firefox\//.test(ua)) {
    result.browser = 'Firefox';
    const match = ua.match(/Firefox\/(\d+)/);
    if (match) result.browserVersion = match[1];
  }
  
  // Override device detection based on screen/touch
  if (result.device === 'Desktop' && /Mobile|Android/.test(ua)) {
    result.device = 'Mobile';
  }
  
  return result;
};

// Get OS icon component
const getOSIcon = (os) => {
  switch (os) {
    case 'Windows': return <WindowsIcon />;
    case 'macOS': return <AppleIcon />;
    case 'iOS': return <AppleIcon />;
    case 'Android': return <AndroidIcon />;
    case 'Linux': return <LinuxIcon />;
    default: return <DesktopIcon />;
  }
};

// Get browser icon component
const getBrowserIcon = (browser) => {
  switch (browser) {
    case 'Chrome': return <ChromeIcon />;
    case 'Safari': return <SafariIcon />;
    case 'Firefox': return <FirefoxIcon />;
    case 'Edge': return <EdgeIcon />;
    default: return <ChromeIcon />;
  }
};

// Get device icon component
const getDeviceIcon = (device) => {
  switch (device) {
    case 'Mobile': return <MobileIcon />;
    case 'Tablet': return <TabletIcon />;
    default: return <DesktopIcon />;
  }
};

function App() {
  const [username, setUsername] = useState('')
  const [currentPage, setCurrentPage] = useState('login') // 'login' or 'gotcha'
  const [userData, setUserData] = useState(null)
  const [showTerms, setShowTerms] = useState(false)
  
  // Collect data on mount
  useEffect(() => {
    collectUserData().then(setUserData);
  }, []);
  
  const handleGotcha = () => {
    setCurrentPage('gotcha');
  };
  
  const handleReset = () => {
    setCurrentPage('login');
    setUsername('');
  };
  
  const parsedUA = userData ? parseUserAgent(userData.userAgent) : null;

  // Render gotcha page
  if (currentPage === 'gotcha') {
    return (
      <div className="gotcha-page">
        <div className="gotcha-container">
          {/* Header */}
          <div className="gotcha-header">
            <div className="gotcha-warning-badge">
              <WarningIcon />
              <span>Security Demonstration</span>
            </div>
            <h1 className="gotcha-title">Look What We Found</h1>
            <p className="gotcha-subtitle">
              This is everything we collected about you <em>before</em> you even clicked anything.
            </p>
          </div>
          
          {/* Username callout */}
          {username && (
            <div className="gotcha-username-card">
              <div className="username-icon">
                <UserIcon />
              </div>
              <div className="username-content">
                <span className="username-label">You told us your username:</span>
                <span className="username-value">{username}</span>
              </div>
              <p className="password-snark">
                🎣 We almost got your password too... good thing this is just a demo!
              </p>
            </div>
          )}

          {/* Ad Unit - After username card */}
          <AdUnit
            slot="XXXXXXXXXX"
            format="horizontal"
            className="ad-unit-horizontal"
          />

          {/* Data Dashboard */}
          {userData && parsedUA && (
            <div className="gotcha-dashboard">
              
              {/* Device Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon device-icon">
                    {getDeviceIcon(parsedUA.device)}
                  </div>
                  <h3>Your Device</h3>
                </div>
                <div className="data-grid">
                  <div className="data-item">
                    <span className="data-icon">{getOSIcon(parsedUA.os)}</span>
                    <div className="data-text">
                      <span className="data-label">Operating System</span>
                      <span className="data-value">{parsedUA.os} {parsedUA.osVersion}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <span className="data-icon">{getBrowserIcon(parsedUA.browser)}</span>
                    <div className="data-text">
                      <span className="data-label">Browser</span>
                      <span className="data-value">{parsedUA.browser} {parsedUA.browserVersion}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <span className="data-icon">{getDeviceIcon(parsedUA.device)}</span>
                    <div className="data-text">
                      <span className="data-label">Device Type</span>
                      <span className="data-value">{parsedUA.device}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <span className="data-icon"><FingerprintIcon /></span>
                    <div className="data-text">
                      <span className="data-label">Touch Points</span>
                      <span className="data-value">{userData.maxTouchPoints} {userData.maxTouchPoints > 0 ? '(Touch Device)' : '(No Touch)'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hardware Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon hardware-icon">
                    <DesktopIcon />
                  </div>
                  <h3>Hardware Info</h3>
                </div>
                <div className="data-grid">
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">CPU Cores</span>
                      <span className="data-value">{userData.hardwareConcurrency}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Device Memory</span>
                      <span className="data-value">{userData.deviceMemory}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">GPU Vendor</span>
                      <span className="data-value">{userData.webGL.vendor}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">GPU Renderer</span>
                      <span className="data-value small">{userData.webGL.renderer}</span>
                    </div>
                  </div>
                  {userData.battery && (
                    <>
                      <div className="data-item">
                        <span className="data-icon"><BatteryIcon /></span>
                        <div className="data-text">
                          <span className="data-label">Battery Level</span>
                          <span className="data-value">{userData.battery.level} {userData.battery.charging ? '⚡ Charging' : ''}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Screen Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon screen-icon">
                    <ScreenIcon />
                  </div>
                  <h3>Screen & Display</h3>
                </div>
                <div className="data-grid">
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Screen Resolution</span>
                      <span className="data-value">{userData.screenWidth} × {userData.screenHeight}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Viewport Size</span>
                      <span className="data-value">{userData.innerWidth} × {userData.innerHeight}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Color Depth</span>
                      <span className="data-value">{userData.colorDepth}-bit</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Pixel Ratio</span>
                      <span className="data-value">{userData.devicePixelRatio}x</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ad Unit - Middle of dashboard */}
              <div className="data-card ad-card">
                <AdUnit
                  slot="XXXXXXXXXX"
                  format="rectangle"
                  className="ad-unit-inline"
                />
              </div>

              {/* Location Card */}
              {userData.ip && (
                <div className="data-card location-card">
                  <div className="card-header-row">
                    <div className="card-icon location-icon">
                      <LocationIcon />
                    </div>
                    <h3>Your Location</h3>
                  </div>
                  <div className="location-hero">
                    <div className="location-main">
                      <span className="location-city">{userData.ip.city}, {userData.ip.region}</span>
                      <span className="location-country">{userData.ip.country}</span>
                    </div>
                  </div>
                  <div className="data-grid">
                    <div className="data-item">
                      <div className="data-text">
                        <span className="data-label">IP Address</span>
                        <span className="data-value mono">{userData.ip.ip}</span>
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-text">
                        <span className="data-label">Postal Code</span>
                        <span className="data-value">{userData.ip.postal || 'Unknown'}</span>
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-text">
                        <span className="data-label">Coordinates</span>
                        <span className="data-value mono">{userData.ip.latitude}, {userData.ip.longitude}</span>
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-text">
                        <span className="data-label">ISP / Provider</span>
                        <span className="data-value small">{userData.ip.isp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Network Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon network-icon">
                    <NetworkIcon />
                  </div>
                  <h3>Network & Connection</h3>
                </div>
                <div className="data-grid">
                  {userData.connection && (
                    <>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Connection Type</span>
                          <span className="data-value">{userData.connection.effectiveType}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Download Speed</span>
                          <span className="data-value">{userData.connection.downlink}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Latency (RTT)</span>
                          <span className="data-value">{userData.connection.rtt}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Data Saver</span>
                          <span className="data-value">{userData.connection.saveData ? 'Enabled' : 'Disabled'}</span>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Online Status</span>
                      <span className="data-value">{userData.onLine ? '🟢 Online' : '🔴 Offline'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Time & Locale Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon time-icon">
                    <TimeIcon />
                  </div>
                  <h3>Time & Locale</h3>
                </div>
                <div className="data-grid">
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Timezone</span>
                      <span className="data-value">{userData.timezone}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Local Time</span>
                      <span className="data-value">{userData.localTime}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Language</span>
                      <span className="data-value">{userData.language}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">All Languages</span>
                      <span className="data-value small">{userData.languages}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Browser Features Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon fingerprint-icon">
                    <FingerprintIcon />
                  </div>
                  <h3>Browser Fingerprint</h3>
                </div>
                <div className="feature-grid">
                  <div className={`feature-item ${userData.cookiesEnabled ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.cookiesEnabled ? '✓' : '✗'}</span>
                    <span>Cookies</span>
                  </div>
                  <div className={`feature-item ${userData.localStorageAvailable ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.localStorageAvailable ? '✓' : '✗'}</span>
                    <span>LocalStorage</span>
                  </div>
                  <div className={`feature-item ${userData.sessionStorageAvailable ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.sessionStorageAvailable ? '✓' : '✗'}</span>
                    <span>SessionStorage</span>
                  </div>
                  <div className={`feature-item ${userData.indexedDBAvailable ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.indexedDBAvailable ? '✓' : '✗'}</span>
                    <span>IndexedDB</span>
                  </div>
                  <div className={`feature-item ${userData.pdfViewerEnabled ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.pdfViewerEnabled ? '✓' : '✗'}</span>
                    <span>PDF Viewer</span>
                  </div>
                  <div className={`feature-item ${userData.mediaDevices ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.mediaDevices ? '✓' : '✗'}</span>
                    <span>Media Devices</span>
                  </div>
                  <div className={`feature-item ${userData.geolocationSupported ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.geolocationSupported ? '✓' : '✗'}</span>
                    <span>Geolocation</span>
                  </div>
                  <div className={`feature-item ${userData.doNotTrack === '1' ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.doNotTrack === '1' ? '✓' : '✗'}</span>
                    <span>Do Not Track</span>
                  </div>
                  <div className={`feature-item ${userData.webdriver ? 'disabled' : 'enabled'}`}>
                    <span className="feature-status">{userData.webdriver ? '!' : '✓'}</span>
                    <span>Not Automated</span>
                  </div>
                  <div className={`feature-item ${userData.bluetoothSupported ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.bluetoothSupported ? '✓' : '✗'}</span>
                    <span>Bluetooth API</span>
                  </div>
                  <div className={`feature-item ${userData.usbSupported ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.usbSupported ? '✓' : '✗'}</span>
                    <span>USB API</span>
                  </div>
                  <div className={`feature-item ${userData.serialSupported ? 'enabled' : 'disabled'}`}>
                    <span className="feature-status">{userData.serialSupported ? '✓' : '✗'}</span>
                    <span>Serial API</span>
                  </div>
                </div>
              </div>

              {/* Privacy Detection Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon privacy-icon">
                    <ShieldIcon />
                  </div>
                  <h3>Privacy Detection</h3>
                </div>
                <div className="privacy-badges">
                  <span className={`privacy-badge ${userData.vpnDetection?.likelyVPN ? 'detected' : 'not-detected'}`}>
                    <ShieldIcon />
                    {userData.vpnDetection?.likelyVPN ? 'VPN Likely Detected' : 'No VPN Detected'}
                  </span>
                  <span className={`privacy-badge ${userData.adBlockerDetected ? 'detected' : 'not-detected'}`}>
                    <BlockIcon />
                    {userData.adBlockerDetected ? 'Ad Blocker Detected' : 'No Ad Blocker'}
                  </span>
                </div>
                <div className="data-grid">
                  {userData.vpnDetection?.indicators?.length > 0 && (
                    <div className="data-item" style={{ gridColumn: '1 / -1' }}>
                      <div className="data-text">
                        <span className="data-label">VPN Indicators</span>
                        {userData.vpnDetection.indicators.map((indicator, i) => (
                          <span key={i} className="privacy-indicator warning">⚠ {indicator}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {userData.webrtcIPs && (userData.webrtcIPs.local.length > 0 || userData.webrtcIPs.public.length > 0) && (
                    <div className="data-item" style={{ gridColumn: '1 / -1' }}>
                      <div className="data-text">
                        <span className="data-label">WebRTC IP Leak</span>
                        <div className="webrtc-ips">
                          {userData.webrtcIPs.local.map((ip, i) => (
                            <span key={`local-${i}`} className="webrtc-ip local">{ip} (local)</span>
                          ))}
                          {userData.webrtcIPs.public.map((ip, i) => (
                            <span key={`public-${i}`} className="webrtc-ip public">{ip} (public)</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {(!userData.webrtcIPs || (userData.webrtcIPs.local.length === 0 && userData.webrtcIPs.public.length === 0)) && (
                    <div className="data-item">
                      <div className="data-text">
                        <span className="data-label">WebRTC</span>
                        <span className="privacy-indicator success">No IP leak detected</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Advanced Fingerprint Card */}
              <div className="data-card">
                <div className="card-header-row">
                  <div className="card-icon advanced-fp-icon">
                    <FingerprintIcon />
                  </div>
                  <h3>Advanced Fingerprint</h3>
                </div>
                <div className="data-grid">
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Canvas Hash</span>
                      <span className="fingerprint-hash">{userData.canvasFingerprint || 'unavailable'}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Audio Hash</span>
                      <span className="fingerprint-hash">{userData.audioFingerprint || 'unavailable'}</span>
                    </div>
                  </div>
                  {userData.mediaPreferences && (
                    <>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Color Scheme</span>
                          <span className="data-value">{userData.mediaPreferences.colorScheme}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Pointer Type</span>
                          <span className="data-value">{userData.mediaPreferences.pointer}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Hover Support</span>
                          <span className="data-value">{userData.mediaPreferences.hover ? 'Yes' : 'No'}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">HDR Display</span>
                          <span className="data-value">{userData.mediaPreferences.hdr ? 'Yes' : 'No'}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Reduced Motion</span>
                          <span className="data-value">{userData.mediaPreferences.reducedMotion ? 'Preferred' : 'No preference'}</span>
                        </div>
                      </div>
                      <div className="data-item">
                        <div className="data-text">
                          <span className="data-label">Contrast Pref</span>
                          <span className="data-value">{userData.mediaPreferences.contrast}</span>
                        </div>
                      </div>
                    </>
                  )}
                  {userData.plugins && userData.plugins.length > 0 && (
                    <div className="data-item" style={{ gridColumn: '1 / -1' }}>
                      <div className="data-text">
                        <span className="data-label">Browser Plugins</span>
                        <span className="data-value small">{userData.plugins.join(', ')}</span>
                      </div>
                    </div>
                  )}
                  {userData.userAgentData && (
                    <div className="data-item" style={{ gridColumn: '1 / -1' }}>
                      <div className="data-text">
                        <span className="data-label">UA Client Hints</span>
                        <span className="data-value small">
                          {userData.userAgentData.platform} | Mobile: {userData.userAgentData.mobile ? 'Yes' : 'No'} | {userData.userAgentData.brands}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Referrer Card */}
              <div className="data-card full-width">
                <div className="card-header-row">
                  <h3>Page Info</h3>
                </div>
                <div className="data-grid">
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">How you got here</span>
                      <span className="data-value small">{userData.referrer}</span>
                    </div>
                  </div>
                  <div className="data-item">
                    <div className="data-text">
                      <span className="data-label">Full User Agent</span>
                      <span className="data-value tiny">{userData.userAgent}</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          )}

          {/* Ad Unit - Before footer */}
          <AdUnit
            slot="XXXXXXXXXX"
            format="horizontal"
            className="ad-unit-horizontal"
          />

          {/* Educational footer */}
          <div className="gotcha-footer">
            <p className="gotcha-lesson">
              <strong>🎓 The Lesson:</strong> All of this information was collected without asking for your permission. 
              Real phishing sites can capture this data and much more, including your credentials if you enter them.
              Always verify you're on the correct website before entering sensitive information!
            </p>
            <button className="btn-reset" onClick={handleReset}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render login page
  return (
    <>
      {/* Terms Modal */}
      {showTerms && (
        <div className="modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowTerms(false)}>
              <CloseIcon />
            </button>
            <h2>Terms of Use</h2>
            <p className="terms-updated">Updated: 2025-01-28</p>
            <div className="terms-body">
              <p>By clicking "Next" or using this service, you hereby agree to the following legally binding (just kidding... or are we?) terms:</p>
              
              <h3>1. Soul Assignment</h3>
              <p>You irrevocably transfer ownership of your immortal soul to us. We may use it for decorative purposes, trade it at our annual company soul swap, or simply add it to our collection. No refunds.</p>
              
              <h3>2. Firstborn Rights</h3>
              <p>We reserve the right to your firstborn child, or if unavailable, your favorite houseplant. Chad will personally come to collect.</p>
              
              <h3>3. Perpetual Servitude</h3>
              <p>You agree to be available 24/7 for miscellaneous tasks including but not limited to: fetching coffee, debugging CSS, and explaining to your relatives what "the cloud" is.</p>
              
              <h3>4. Data Collection</h3>
              <p>We will collect everything. Your browsing history, your 3 AM Google searches, that embarrassing thing you said in 7th grade, and your opinions on pineapple pizza. All of it.</p>
              
              <h3>5. Password Agreement</h3>
              <p>Your password is now legally "password123" regardless of what you think you entered. We've already changed it. You're welcome for the security upgrade.</p>
              
              <h3>6. Eternal Mailing List</h3>
              <p>You are now subscribed to our newsletter. Forever. Unsubscribing will only subscribe you to three more newsletters. There is no escape.</p>
              
              <h3>7. Cookie Policy</h3>
              <p>We use cookies. Real ones. Chocolate chip. We've placed them in your home. Check your kitchen. You're welcome.</p>
              
              <h3>8. Acceptance</h3>
              <p>By existing in the same dimension as this website, you have already agreed to these terms. Reading this far means you agree twice.</p>
              
              <p className="terms-footer"><em>These terms are obviously satirical and part of a security awareness demonstration. But seriously, always read the terms of service (even though no one does).</em></p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div style={{ display: 'flex' }}>
          <div style={{ backgroundColor: 'rgb(0, 125, 165)', height: '74px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', padding: '0px', margin: '0px' }}>
            <img className='header-chad' role="presentation" src="/images/chad.png" alt="" style={{ margin: '0px', padding: '0px' }} height="36" />
          </div>
          <img role="presentation" src="/images/blueRays.svg" alt="" style={{ margin: '0px', padding: '0px' }} height="74" width="48" />
          <a href="https://www.churchofjesuschrist.org/?lang=eng" style={{ display: 'flex', alignItems: 'center' }}>
            <img role="presentation" src="/images/logo.png" alt="The Church of Jesus Christ of Latter-day Saints" style={{ margin: '0px', padding: '0px' }} height="74" />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
          <button aria-label="Select language" type="button" className="eden-button-a11y" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', cursor: 'pointer' }}>
            <LanguageIcon />
            <span>English</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="main">
        <div className="sign-in-card">
          <div className="card-header">
            <h1 className="card-heading">Sign In</h1>
          </div>

          <div className="form-group">
            <label className="form-label">Username</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          <button className="btn-next" disabled={!username.trim()} onClick={handleGotcha}>
            Next
          </button>

          <p className="terms-text">
            By proceeding to login I agree to the{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms of Use</a>.
          </p>

          <div className="links-section">
            <button className="link-button" onClick={(e) => e.preventDefault()}>
              <span className="link-icon">
                <PersonAddIcon />
              </span>
              Create a new account
            </button>
            <button className="link-button" onClick={(e) => e.preventDefault()}>
              <span className="link-icon">
                <HelpIcon />
              </span>
              I forgot my username or password
            </button>
          </div>
        </div>

        <div className="chad-container">
          <a href="https://www.youtube.com/watch?v=AnwNuH497RE" target="_blank" rel="noopener noreferrer">
            <img src="/images/chad.png" alt="" className="chad-image" />
          </a>
        </div>
      </main>
    </>
  )
}

export default App
