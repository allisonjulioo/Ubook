import Modal from '@/components/Modal.vue';
import '@/config/setupTests';
import { ModalStore } from '@/store/modules/modal';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';

const Component = {
  template: `
    <article> 
     Modal {{test}} 
    </article>
  `,

  data() {
    return {
      test: 'foo',
    };
  },
};

const mockState = {
  modal: {
    component: Component,
    open: true,
    id: 'modal-add-contact',
    title: 'Criar novo contato',
    primaryButtonLabel: 'Salvar',
    closeOnBackdropClick: true,
    secondaryButtonAction: () => ({}),
  },
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
    global: {
      plugins: [store],
    },
  };

  it('should mount correctly component with state', async () => {
    const wrapper = mount(Modal, configMock);

    expect(wrapper.vm.modal).toEqual(mockState.modal);

    wrapper.vm.handleCloseModal();
  });

  it('should show header', async () => {
    const wrapper = mount(Modal, configMock);

    const modalTile = wrapper.find('header');

    expect(modalTile.exists()).toBeTruthy();

    expect(modalTile.text()).toBe('Criar novo contato');
  });

  it('should hide header without title label', async () => {
    const newState = {
      ...mockState.modal,
      title: undefined,
    };

    store.dispatch('openModal', newState);

    const wrapper = mount(Modal, configMock);

    const modalFooter = wrapper.find('header');

    expect(modalFooter.exists()).toBeFalsy();
  });

  it('should render child component', async () => {
    const wrapper = mount(Modal, configMock);

    const modalComponent = wrapper.find('article');

    expect(modalComponent.exists()).toBeTruthy();

    expect(modalComponent.text()).toBe('Modal foo');
  });

  it('should show footer', async () => {
    const wrapper = mount(Modal, configMock);

    const modalFooter = wrapper.find('footer');

    expect(modalFooter.exists()).toBeTruthy();

    expect(modalFooter.text()).toBe('Salvar');
  });

  it('should hide footer without buttons label', async () => {
    const newState = {
      ...mockState.modal,
      primaryButtonLabel: undefined,
    };

    store.dispatch('openModal', newState);

    const wrapper = mount(Modal, configMock);

    const modalFooter = wrapper.find('footer');

    expect(modalFooter.exists()).toBeFalsy();
  });
});
