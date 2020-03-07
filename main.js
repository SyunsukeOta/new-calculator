var app1 = new Vue({
  el: "#app1",
  data: {
    nums: 0,
    curr: 0,
    prev: 0,
    equa: 0,
    calc: '',
    message: '0'
  },
  methods: {
    num: function(n) {
      if (this.equa == 1) {
        this.curr = 0
      }
      this.curr = this.curr*10 + n
      this.message = String(this.curr)
    },
    cal: function(c) {
      if (this.calc != '') {
        this.viewAns()
      }
      this.changeNum(c)
      this.calc = c
    },
    ans: function() {
      if (this.curr != 0 && this.prev != 0) {
        this.viewAns()
      }
      this.equa = 1
    },
    reset: function() {
      this.curr = 0
      this.prev = 0
      this.calc = ''
      this.message = 0
      this.equa = 0
    },
    changeNum: function(c) {
      this.message = c
      this.prev = this.curr
      this.curr = 0
    },
    viewAns: function() {
      this.curr = this.changeCal()
      this.prev = 0
      this.calc = ''
      this.message = this.curr
    },
    changeCal: function() {
      switch(this.calc) {
        case '+':
          return this.prev + this.curr
        case '-':
          return this.prev - this.curr
        case 'x':
          return this.prev * this.curr
        case '÷':
          return this.prev / this.curr
        default:
          return this.curr
      }
    }
  }
})