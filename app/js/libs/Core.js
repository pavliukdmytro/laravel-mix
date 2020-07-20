module.exports = {
    debug: false,
    /**
     * Определяет состояние отладки проекта
     * @param bool
     */
    setDebug: function (bool) {
        this.debug = bool;
    },
    printComponentInfo: function (name, ob) {
        if (this.debug) {
            console.log('Компонент '+name, ob);
        }
    }
}
