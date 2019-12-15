import {mount} from '@vue/test-utils'
import List from "../../src/components/List";

describe('List functionality', () => {
    // Now mount the component and you have the wrapper
    const testData = [
        {
            id: 1,
            title: 'Foo',
            done: false
        }, {
            id: 2,
            title: 'Bar',
            done: false
        }, {
            id: 3,
            title: 'Foobar',
            done: true
        }, {
            id: 4,
            title: 'Barfoo',
            done: true
        }]

    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    });

    it('Correct item\'s done status gets changed', async () => {
        wrapper.find('.list-item:first-of-type span').trigger('click');
        wrapper.find('.list-item:nth-of-type(3) span').trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.list[0].done).toBe(true)
        expect(wrapper.vm.list[1].done).toBe(false)
        expect(wrapper.vm.list[2].done).toBe(false)
        expect(wrapper.vm.list[3].done).toBe(true)
    });
});