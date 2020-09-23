import { shallowMount } from '@vue/test-utils'
import SdCard from './SdCard.vue'

describe('SdCard', () => {
  it('renders elevation class when passed', () => {
    const wrapper = shallowMount(SdCard, {
      propsData: {
        elevation: 7
      }
    })
    console.log()
    const expected = 'sd--elevation--7'
    expect(wrapper.vm.cardElevation).toBe(expected)
  })
})
