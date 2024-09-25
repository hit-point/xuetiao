import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';
// The component to test
describe('test button', () => {
  // 用例含义：传入 button 组件,并将其默认 slot 设置为xuetiao,我们期望页面加载的时候文本会展示xuetiao
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'xuetiao'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('xuetiao');
  });

  // 用例含义：Button 组件传入 type 展示某个样式
  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('hp-button--primary');
  });
});
