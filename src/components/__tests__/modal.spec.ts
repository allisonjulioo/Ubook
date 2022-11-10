import Modal from '@/components/Modal.vue';
import '@/config/setupTests';
import { ModalStore } from '@/store/modules/modal';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';

const mockState = {
  modalId: 'test-modal',
};

describe('Modal Component', () => {
  const state = mockState;

  const getters = ModalStore.getters;

  const actions = ModalStore.actions;

  const mutations = ModalStore.mutations;

  const store = createStore({
    state,
    getters,
    mutations,
    actions,
  });

  const configMock = {
    props: {
      title: 'Modal Teste',
      id: 'test-modal',
    },
    global: {
      plugins: [store],
    },
  };

  it('should mount correctly component with state', async () => {
    const wrapper = mount(Modal, configMock);

    expect(wrapper.vm.modalId).toEqual(mockState.modalId);

    // wrapper.vm.handleCloseModal();
  });

  it('should show header', async () => {
    const wrapper = mount(Modal, configMock);

    const modalTile = wrapper.find('header');

    expect(modalTile.exists()).toBeTruthy();

    expect(modalTile.text()).toBe('Modal Teste');
  });

  it('should hide header without title label', async () => {
    const props = {
      id: 'test-modal',
    };

    const wrapper = mount(Modal, { ...configMock, props });

    const modalFooter = wrapper.find('header');

    expect(modalFooter.exists()).toBeFalsy();
  });

  it('should render child component', async () => {
    const wrapper = mount(Modal, {
      ...configMock,
      slots: { default: 'Modal foo' },
    });

    const modalContent = wrapper.find('main');

    expect(modalContent.exists()).toBeTruthy();

    expect(modalContent.text()).toBe('Modal foo');
  });

  it('should show footer', async () => {
    const wrapper = mount(Modal, configMock);

    const modalFooter = wrapper.find('footer');

    expect(modalFooter.exists()).toBeTruthy();

    expect(modalFooter.text()).toBe('Fechar');
  });

  it('should hide footer with slot label', async () => {
    const wrapper = mount(Modal, {
      ...configMock,
      slots: { footer: 'Salvar' },
    });

    const modalFooter = wrapper.find('footer');

    expect(modalFooter.exists()).toBeTruthy();

    expect(modalFooter.text()).toBe('Salvar');
  });
});
