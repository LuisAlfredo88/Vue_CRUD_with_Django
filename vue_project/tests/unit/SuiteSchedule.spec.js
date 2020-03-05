import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vue from 'vue'
import SuiteSchedule from "@/components/admin/appointment/SuiteSchedule.vue";
import Vuetify from 'vuetify'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe("SuiteSchedule.vue", () => {
	let vuetify

	beforeEach(() => {
	  vuetify = new Vuetify()
	});

	it("renders appropiate sum value", () => {
		const wrapper = mount(SuiteSchedule, {
			localVue,
			vuetify,
			propsData: {
				booked_qty: 2,
				confirmed_qty: 2,
				canceled_qty: 2
			},
		})		

		const content = wrapper.find('.v-card__actions > div span')	;	
		expect(content.text()).toBe("6");
	});


	it("validating render suite name correctly", () => {
		const wrapper = mount(SuiteSchedule, {
			localVue,
			vuetify,
			propsData: {
				suite_name: "Centro de atención - suite 201"
			},
		})		

		const content = wrapper.find('.v-list-item__subtitle');	
		expect(content.text()).toBe("Centro de atención - suite 201");
	});

});
