import { shallowMount  } from '@vue/test-utils';
import App from '../../src/scripts/app/components/app.vue';
// import app from '../../scripts/app/components/app.vue';

// describe('App.vue', () => {
//     test('renders props.msg when passed', () => {
//       const msg = 'new message'
//       const wrapper = shallowMount(App, {
//         propsData: { msg }
//       })
//       expect(wrapper.text()).toMatch(msg)
//     })
//   })

// import { shallowMount } from '@vue/test-utils'
// import Component from '../Component.vue'

const wrapper = shallowMount(App)

// describe('App', () => {
//     it('renders a div', () => {
//       const wrapper = mount(App)
//       expect(wrapper.contains('div')).toBe(true)
//     })
//   })