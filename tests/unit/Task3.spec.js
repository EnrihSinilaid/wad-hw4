import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";
describe('Footer', () => {
    const value = false;
    let wrapper;

    beforeEach(() => {
        // use this to check the state of anything in the view
        wrapper = mount(Footer)
    });

    it("+ is clicked and open is set true", async () => {
        expect(wrapper.vm.$data.open).toEqual(false);
        let value = wrapper.vm.open
        wrapper.find("span").trigger('click');
        expect(wrapper.vm.$data.open).toEqual(true);

    })
})