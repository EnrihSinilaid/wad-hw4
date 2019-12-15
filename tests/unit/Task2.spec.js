// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)
    const today = new Date();
    // Check that this component properly displays today's date

    it('renders the correct date', () => {
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })
    it("renders the correct year", () => {
        let year = today.getFullYear();
        expect(wrapper.html()).toContain(year)
    })

    it("renders the correct month", () => {
        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT',	'NOV', 'DEC'];
        let month = months[today.getMonth()];
        expect(wrapper.html()).toContain(month)
    })

    it("renders the correct weekday", () => {
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let weekday = weekdays[today.getDay()]
        expect(wrapper.html()).toContain(weekday.toUpperCase())
    })
});