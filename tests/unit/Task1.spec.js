import { mount } from '@vue/test-utils'
import List from "../../src/components/List";
describe('List component', () => {
    // Now mount the component and you have the wrapper
    const testData = [
        {id: 1,
            title: 'Foo',
            done: true
        }, {
            id: 2,
            title: 'Bar',
            done: true
        }, {
            id: 3,
            title: 'Foobar',
            done: false
        }]
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    });
    it('renders the correct amount of tasks', () => {
        const items = wrapper.findAll('.list-item');
        expect(items.length).toEqual(testData.length);
    });
    it('renders the correct amount of done tasks', () => {
        const items = wrapper.findAll('.done');
        const doneItems = testData.filter(item => item.done);
        expect(items.length).toEqual(doneItems.length);
    });

    it('renders the correct amount of not done tasks', () => {
        //Version 1
        const notDoneElements = wrapper.findAll('.list-item:not(.done)')
        const notDoneItems = testData.filter(item => !item.done);
        expect(notDoneElements.length).toEqual(notDoneItems.length);
        //Version 2
        const elements = wrapper.findAll('.list-item');
        const doneElements = wrapper.findAll('.done');
        expect(elements.length - doneElements.length).toEqual(notDoneItems.length)
    });
    it("If no list items display text", () =>{
        let items = wrapper.findAll('.list-item');
        if (items.length === 0){
            expect(wrapper.html()).toContain("Add your first Todo task")
        }
    })
});