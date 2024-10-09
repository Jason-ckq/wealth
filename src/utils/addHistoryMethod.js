class Dep {
  constructor() {
    this.id = new Date();
    this.subs = []; //该事件下被订阅对象的集合
  }

  // 收集订阅或依赖
  defined(watch) {
    this.subs.push(watch);
  }
  // 通知订阅者或派发通知
  notify() {
    this.subs.forEach((fn) => {
      if (typeof fn.update === 'function') {
        try {
          fn.update.call(fn);
        } catch (error) {
          console.warn(error);
        }
      }
    });
  }
}

class Watch {
  constructor(name, fn) {
    this.name = name; //订阅消息的名称
    this.callback = fn; //订阅消息发送改变时->订阅者执行的回调函数
    this.id = new Date();
  }

  //将订阅者放入dep订阅池
  add(dep) {
    dep.subs.push(this);
  }

  //将订阅者更新方法
  update() {
    const cb = this.callback;
    cb(this.name);
  }
}

const addHistoryMethod = (function () {
  const historyDep = new Dep();
  return function (name) {
    if (name === 'historychange') {
      return function (name, fn) {
        const event = new Watch(name, fn);
        historyDep.defined(event);
      };
    } else if (['pushState', 'replaceState'].includes(name)) {
      // 重写history.pushState, history.replaceState,并添加消息通知。
      const method = history[name];
      return function () {
        method.apply(history, arguments);
        historyDep.notify(); //消息通知事件，这里触发之前已经被依赖收集订阅的historychange。
      };
    }
  };
})();

export default addHistoryMethod;
