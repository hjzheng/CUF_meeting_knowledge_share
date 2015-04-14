/**
 * Created by hjzheng on 2014/10/27.
 */
angular.module('app', []).controller('treeController', function($scope){
    $scope.tree = [
        { id: 1, name: 'John', score: 130, city: 'New York', birthday: '1980/2/5',
            children:[
                { id: 6, name: 'John2', score: 82, city: 'San Fran1', birthday: '1990/1/21'},
                { id: 7, name: 'John2', score: 81, city: 'San Fran2', birthday: '1990/1/22',
                    children:[{ id: 8, name: 'John3', score: 89, city: 'San Francisco', birthday: '1990/1/21'}]
                }
            ]
        },
        { id: 2, name: 'Alice', score: 123, city: 'Washington', birthday: '1984/3/7'},
        { id: 3, name: 'Lee', score: 149, city: 'Shanghai', birthday: '1986/10/8'},
        { id: 4, name: 'Mike', score: 100, city: 'London', birthday: '1988/8/12'},
        { id: 5, name: 'Tom', score: 89, city: 'San Francisco', birthday: '1990/1/21',
            children: [
                { id: 9, name: 'Tom1', score: 77, city: 'San Francisco', birthday: '1990/1/21'},
                { id: 10, name: 'Tom2', score: 85, city: 'San Francisco', birthday: '1990/1/21'},
                { id: 11, name: 'Tom3', score: 83, city: 'San Francisco', birthday: '1990/1/21'}
            ]
        }
    ];

    $scope.itemId = 1;
    $scope.isExpend = true;

    $scope.itemClick = function (id, expend) {
        $scope.itemId = id;
        $scope.isExpend = !expend
    };

}).filter('filterTreeItem', function(){
    function recursive(obj, newObj, level, itemId, isExpend) {
        angular.forEach(obj, function (o) {
            if(o.children && o.children.length !=0){
                o.level = level;
                o.leaf = false;
                newObj.push(o);
                if(o.id == itemId) {
                    o.expend = isExpend;
                }
                if(o.expend == true) {
                    recursive(o.children, newObj, o.level + 1, itemId, isExpend);
                }
            } else {
                o.level = level;
                o.leaf = true;
                newObj.push(o);
                return false;
            }
        });
    }

    return function (obj, itemId, isExpend) {
        var newObj = [];
        recursive(obj, newObj, 0, itemId, isExpend);
        return newObj;
    }
});