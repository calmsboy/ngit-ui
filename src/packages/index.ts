import buButton from "./buButton/index";
const components = [buButton]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install: any = function (app: any) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.forEach(component => {
    app.component(component.name, component)
  });
};
// 判断是否是直接引入文件

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}
export default {
  install,
  buButton
}
