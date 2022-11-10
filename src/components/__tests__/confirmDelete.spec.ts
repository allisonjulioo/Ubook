import ConfirmDelete from '@/components/ConfirmDelete.vue';
import '@/config/setupTests';
import { ConfirmStore } from '@/store/modules/confirmDelete';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';

const mockState = {
  confirm: {
    title: 'Teste delete confirm',
    text: 'Você tem certeza?',
    open: true,
    onConfirm: () => undefined,
    onDecline: () => undefined,
  },
};

describe('Confirm Delete Component', () => {
  const state = mockState;

  const getters = ConfirmStore.getters;

  const actions = ConfirmStore.actions;

  const mutations = ConfirmStore.mutations;

  const store = createStore({
    state,
    getters,
    mutations,
    actions,
  });

  const configMock = {
    global: {
      plugins: [store],
    },
  };

  it('should mount correctly component with state', async () => {
    const wrapper = mount(ConfirmDelete, configMock);

    expect(wrapper.vm.confirm).toEqual(mockState.confirm);

    // wrapper.vm.handleCloseModal();
  });

  it('should show header', async () => {
    const wrapper = mount(ConfirmDelete, configMock);

    const modalTile = wrapper.find('header');

    expect(modalTile.exists()).toBeTruthy();

    expect(modalTile.text()).toBe('Teste delete confirm');
  });

  it('should render child component', async () => {
    const wrapper = mount(ConfirmDelete, configMock);

    const modalContent = wrapper.find('main');

    expect(modalContent.exists()).toBeTruthy();

    expect(modalContent.text()).toBe('Você tem certeza?');
  });

  it('should show footer', async () => {
    const wrapper = mount(ConfirmDelete, configMock);

    const modalFooter = wrapper.find('footer');

    expect(modalFooter.exists()).toBeTruthy();
  });

  it('should sow footer footer button cancel', async () => {
    const wrapper = mount(ConfirmDelete, configMock);

    const modalFooter = wrapper.find('cs-button');

    expect(modalFooter.exists()).toBeTruthy();

    expect(modalFooter.text()).toBe('Não');
  });
});
