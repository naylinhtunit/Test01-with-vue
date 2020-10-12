var one = new Vue({
    el: '#vue-app-one',
    data: {
        //
        title: 'One'
    },

    methods: {
        //
    },

    computed: {
        //
        greet: function(){
            return 'There is one!';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        //
        title: 'two'
    },

    methods: {
        //
        titleChange: function(){
            one.title = "Changed Title";
        }
    },

    computed: {
        //
        greet: function(){
            return 'There is two!';
        }
    }

});

two.title = "Change from outside";