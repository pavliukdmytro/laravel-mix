/**
 * Место импортирования компонентов и их добавления
 */
if (Core && Core.debug) {
    console.log('Подключен файл с объявлением компонентов');
}
// App.setComponent(require('./components/SearchInput.vue').default);
// App.setComponent(require('./components/SearchInputs').default);
App.setComponent(require('./components/demo').default);
// App.setComponent(require('./components/MorePhoto').default);
// App.setComponent(require('./components/menus/MenuLine').default);
// App.setComponent(require('./components/menus/MenuCatalog').default);
// App.setComponent(require('./components/sliders/SliderStandard').default);

// App.setComponent(require('./components/NewsContainer').default);
// App.setComponent(require('./components/NewsCard').default);
// App.setComponent(require('./components/news/NewsDetail').default);


// Components.setComponent(require('./components/catalog/productsTopList').default);
// Components.setComponent(require('./components/sliders/standard').default);

/**
 * Место импортирования компонентов и их добавления
 */
// Components.setComponent(require('./components/sliders/standard').default);

// Components.setComponent(require('./containers/CheckoutContainer').default);
//Подключение в таком виде возможно как и в blade шаблонах так и глобально
// Components.setComponent(Vue.component('v_components_showcase', require('./containers/ComponentsShowcase').default));       /*v_components_showcase*/

//ux elements...
// Components.setComponent(require('./components/ui-elements/Checkbox').default);  /*v_checkbox*/
// Components.setComponent(require('./components/ui-elements/Input').default);     /*v_input*/
// Components.setComponent(require('./components/ui-elements/Radio').default);     /*v_radio*/
// Components.setComponent(require('./components/ui-elements/Select').default);    /*v_select*/
// Components.setComponent(Vue.component('v_info', require('./components/ui-elements/Info').default));       /*v_info*/

// console.log('Components', Components); debugger

/*
 * Компоненты которые необходимо протестить и провести код ревью
 * @todo Отключеные компоненты нужно или удалить или запустить
 */
// App.setVyeObject(require('./libs/Basket'));
// App.setComponent(require('./components/basket/small').default);

// Components.setComponent(require('vue-agile').default);

// Components.setComponent(require('./components/catalog/product-detail').default);
// App.setComponent(require('./components/basket/basket').default);
// App.setComponent(require('./components/catalog/price').default);
// App.setComponent(require('./components/catalog/product-card').default);
// App.setComponent(require('./components/catalog/products-top-list').default);
