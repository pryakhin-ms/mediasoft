import * as _ from 'lodash';

function Cart () {
    this.items = [];
    this.count = function () {
        return this.items.reduce(function (acc, currentItem) {
          const {count} = currentItem;
          return acc + count;
        }, 0);
    };
    this.add = function (newItem, count = 1) {
        this.items.push({...newItem, "count": count});
    };
    this.delete = function (item) {
        return _.remove(this.items, (currentItem) => currentItem.id === item.id)
    }
    this.sum = function () {
        return this.items.reduce((acc, item) => {
            return item.price + acc;
        }, 0);
    };
}