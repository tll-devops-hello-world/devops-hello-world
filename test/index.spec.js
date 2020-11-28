import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Shows workshop title', () => {
    const wrapper = mount(index)
    expect(wrapper.text()).toContain('DevOps Hello World v2')
  })

  test('Shows Sysvale Button', () => {
    const wrapper = mount(index)
    const button = wrapper.find("#sysvale")
    expect(button.text()).toBe('Sysvale')
    expect(button.attributes().href).toBe('https://sysvale.com')
  })

  test('Shows LPI Button', () => {
    const wrapper = mount(index)
    const button = wrapper.find('#lpi')
    expect(button.text()).toBe('LPI')
    expect(button.attributes().href).toBe('https://lpi.org')
  })

  test('Shows presentation button', () => {
    const wrapper = mount(index)
    const button = wrapper.find('#presentation')
    expect(button.text()).toBe('Link Para a Apresentação')
    expect(button.attributes().href).toBe('https://docs.google.com/presentation/d/1XWeU9ILL2-kjYCR-2XwzF03JG5S2Owi_tymZ2p0XG5U/edit?usp=sharing')
  })
})
