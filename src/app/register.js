import ko from 'knockout';

ko.components.register('router', { require: 'containers/router/router' })
ko.components.register('default', { require: 'containers/default/default' })
ko.components.register('product', { require: 'containers/product/product' })
ko.components.register('bss-nav-bar', { require: 'containers/nav-bar/nav-bar' })

ko.components.register('main-structure', { require: 'components/main-structure/main-structure' })
