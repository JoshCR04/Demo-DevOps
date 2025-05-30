import { describe, it, expect, vi, beforeEach } from 'vitest'
import { JSDOM } from 'jsdom'
import { Card } from '../src/components/card' // ajusta la ruta según tu estructura

describe('Card Component', () => {
  let dom: JSDOM

  beforeEach(() => {
    // Crear DOM para cada prueba
    dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
      url: 'http://localhost',
      runScripts: 'dangerously',
    })

    // Simular el entorno global (document/window)
    globalThis.document = dom.window.document
    global.window = dom.window as any

    // Renderizar la tarjeta
    const card = new Card(
      'logo.png',
      '25 miembros',
      'Grupo de prueba',
      'Descripción de ejemplo',
      'Ver más',
      'Unirse'
    )
    card.renderHTML()
  })

  it('debe mostrar el mensaje "Welcome!" al hacer clic en Unirse', () => {
    const button = document.getElementById('joinBtn')!
    const mensaje = document.getElementById('mensaje')!

    // Asegurar que el mensaje esté oculto al inicio
    expect(mensaje.classList.contains('hidden')).toBe(true)

    // Simular clic
    button.click()

    // El mensaje debe mostrarse
    expect(mensaje.classList.contains('hidden')).toBe(false)

    // Avanzar el tiempo para simular el timeout de 3 segundos
    vi.useFakeTimers()
    button.click()
    vi.advanceTimersByTime(3000)

    // Después de 3 segundos, el mensaje debería ocultarse otra vez
    expect(mensaje.classList.contains('hidden')).toBe(true)

    vi.useRealTimers()
  })
})
