/**
 * Не больщая инструкция:
 * Есть 2 типа vue компонентов
 * Если нужно что бы вюшка сама создала себе болванку нужно передать в компоненте параметр `selector`
 * именно по нему будет происходить связка
 *
 * Второй тип компонентов является с сложной архитектурой их лучше просто выносить отдельно
 * @todo предусмотреть архитектуру для их удобного вкручивания
 *
 * @type {{init: App.init, components: {}, componentsVue: {}, debug: boolean, data: {exemple: string}, getVueComponent: App.getVueComponent, setComponent: App.setComponent}}
 */
const App = {
    data: {
        exemple: 'data exemle test success',
    },
    /** Хранилище всех объявленных компонентов vue */
    components: {},
    vueObjects: {},
    componentsVue: {},
    debug: true,
    /** Запускает процесс формирования компонентов в виде вюшки (Запуск отложенный после сформированной страницы) */
    init: function()
    {
        let fingerKey = 'dbKey';

        /** Вначале наполняем общий Vue компонентами */
        for (let code in this.components) {
            Vue.component(code, this.components[code]);
        }

        /** Пробег и динамическое создание объектов */
        for (let code in this.components) {
            if (this.components[code].selector && $(this.components[code].selector).length > 0) {
                let comp = $(this.components[code].selector);

                if (comp.length > 1) {
                    for (let i = 0; i < comp.length; i++) {

                        let currentComponent = comp[i];

                        if (this.empty(this.components[code])) {
                            this.components[code] = [];
                        }

                        currentComponent.classList.add(fingerKey+i);

                        let ob = new Vue({
                            el: this.components[code].selector+'.'+fingerKey+i,
                        });

                        if (this.debug) {
                            console.log('Успешно создан vue компонент ('+code+'['+i+'])');
                        }
                    }
                } else {
                    this.componentsVue[code] = new Vue({
                        el: this.components[code].selector,
                    });

                    if (this.debug) {
                        console.log('Успешно создан vue компонент ('+code+')');
                    }
                }
            }
        }

        /** Сформировать объекты для window */
        for (let code in this.vueObjects) {
            if (this.vueObjects[code].globalName
                && this.vueObjects[code].el
                && $(this.vueObjects[code].el).length > 0
            ) {
                window[this.vueObjects[code].globalName]
                    = this.componentsVue[code]
                    = new Vue(this.vueObjects[code]);
            }
        }

        /** Отладка */
        if (this.debug) {
            console.log('Это глобальный объект App: ', this)
        }
    },
    /** Добавление комопнента Vue для работы с ним на странице */
    setComponent: function (vueComponent) {
        if (!vueComponent || !vueComponent.name) {
            if (Core.debug) {
                console.log('Fail set vue component', vueComponent);
            }
        } else {
            this.length ++;
            this.components[vueComponent.name] = vueComponent;
        }
    },
    setVyeObject: function (vueObject) {
        if (!vueObject || !vueObject.name) {
            if (Core.debug) {
                console.log('Fail set vue vueObjects', vueObject);
            }
        } else {
            this.length ++;
            this.vueObjects[vueObject.name] = vueObject;
        }
    },
    getVueComponent: function (componentName) {
        if (this.componentsVue[componentName]) {
            return this.componentsVue[componentName];
        } else {
            if (Core && Core.debug) {
                console.log('Компонент не найден ('+componentName+')');
            }
        }
    },
    empty: function empty (mixedValue){
        switch (typeof mixedValue) {
            case 'undefined':
                return true;
            case 'object':
                for(let val in mixedValue)return false;
                return true;
            case 'string':
                return (mixedValue.length==0?true:false);
            case 'boolean':
                return false;
            case 'number':
                return isNaN(mixedValue);
            case 'function':
                return false;
            default:
                alert('O_o');
        }
    }

}
module.exports = App;
