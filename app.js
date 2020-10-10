new Vue({
    el: '#vue-app',
    data: {
        name: 'Aung Aung',
        job: 'Web Development',
        firstMethodAge: 20,
        secondMethodAge: 20,
        thirdMethodAge: 20,
        x: 0,
        y: 0,
        website: 'https://www.google.com',
        websiteTag: '<a href="https://www.google.com">Inside bind js for html tag.</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + '' + this.job;
        },

        add: function(){
            this.secondMethodAge++;
        },

        subtract: function(){
            this.secondMethodAge--;
        },

        dblAdd: function(inc){
            this.thirdMethodAge += inc;
        },

        dblSubtract: function(dec){
            this.thirdMethodAge -= dec;;
        },

        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        google: function(){
            alert('You click me!');
        }
    }
});