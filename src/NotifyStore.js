import alt from './alt';
import NotifyActions from './NotifyActions';

class NotifyStore {
  constructor() {
    this.stack = [];
    this.bindActions(NotifyActions);
  }

  onAdd(data) {
    this.stack.push(data);
  }

  onRemove(index) {
    var stack = this.stack.splice(index, 1);
  }

  /**
   * Clears either the whole stack, or
   * items having the given type
   */
  onClear(type) {
    this.stack = type == undefined
      ? []
      : this.stack.filter(item => item.type !== type);
  }
}

export default alt.createStore(NotifyStore);
