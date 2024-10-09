import './style.css'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 Hola Mundo
`

console.log('Hola mundo');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)