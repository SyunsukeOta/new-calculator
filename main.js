Vue.component('calc-button', {
  props: ['name', 'type', 'order'],
  template: `<button v-on:click="runner()">{{ name }}</button>`,
  methods: {
    runner() {
      this.$emit(this.type, Number(this.order));
    }
  }
});


var app1 = new Vue({
  el: "#app1",
  data: {
    nums: 0,
    curr: 0,
    prev: 0,
    equa: 0,
    calc: 0,
    message: '0',
    keyNum: 0,
    list: [
      [
        { id: 1, name: '7', type: 'num', order: '7'},
        { id: 2, name: '8', type: 'num', order: '8'},
        { id: 3, name: '9', type: 'num', order: '9'},
        { id: 4, name: '÷', type: 'cal', order: '4'}
      ],
      [
        { id: 1, name: '4', type: 'num', order: '4'},
        { id: 2, name: '5', type: 'num', order: '5'},
        { id: 3, name: '6', type: 'num', order: '6'},
        { id: 4, name: 'x', type: 'cal', order: '3'}
      ],
      [
        { id: 1, name: '1', type: 'num', order: '1'},
        { id: 2, name: '2', type: 'num', order: '2'},
        { id: 3, name: '3', type: 'num', order: '3'},
        { id: 4, name: '-', type: 'cal', order: '2'},
      ],
      [
        { id: 1, name: '0', type: 'num', order: '0'},
        { id: 2, name: 'AC', type: 'reset', order: '1'},
        { id: 3, name: '=', type: 'ans', order: '1'},
        { id: 4, name: '+', type: 'cal', order: '1'},
      ]
    ]
  },
  methods: {
    num: function(n) {
      if (this.equa == 1) {
        this.curr = 0
        this.equa = 0
      }
      this.curr = this.curr*10 + n
      this.message = String(this.curr)
    },
    cal: function(c) {      
      if (this.calc != 0) {
        this.viewAns()
      }
      this.changeNum(c)
      this.calc = c
    },
    ans: function(c) {
      if (this.curr != 0 && this.prev != 0) {
        this.viewAns()
      }
      this.equa = 1
    },
    reset: function(c) {
      this.curr = 0
      this.prev = 0
      this.calc = 0
      this.message = '0'
      this.equa = 0
    },
    changeNum: function(c) {
      this.prev = this.curr
      this.curr = 0
      switch(c) {
        case 1:
          this.message = '+'
          break;
        case 2:
          this.message = '-'
          break;
        case 3:
          this.message = 'x'
          break;
        case 4:
          this.message = '÷'
          break;
      }
    },
    viewAns: function() {
      this.curr = this.changeCal()
      this.prev = 0
      this.calc = 0
      this.message = this.curr
    },
    changeCal: function() {
      switch(this.calc) {
        case 1:
          return this.prev + this.curr
        case 2:
          return this.prev - this.curr
        case 3:
          return this.prev * this.curr
        case 4:
          return (this.prev / this.curr).toFixed(4)
        default:
          return this.curr
      }
    },
    keyAction(e) {
      console.log(e.keyCode);
      this.keyNum = e.keyCode
      switch (this.keyNum) {
        case 48:
          this.num(0)
          break;
        case 49:
          this.num(1)
          break;
        case 50:
          this.num(2)
          break;
        case 51:
          this.num(3)
          break;
        case 52:
          this.num(4)
          break;
        case 53:
          this.num(5)
          break;
        case 54:
          this.num(6)
          break;
        case 55:
          this.num(7)
          break;
        case 56:
          this.num(8)
          break;
        case 57:
          this.num(9)
          break;
        case 43:
          this.cal(1)
          break;
        case 45:
          this.cal(2)
          break;
        case 42:
          this.cal(3)
          break;
        case 47:
          this.cal(4)
          break;
        case 61:
          this.ans(1)
          break;
        case 99:
          this.reset(1)
          break;
      }
    }
  },
  created() {
    //キーコードによる動作の登録
    document.addEventListener("keypress", this.keyAction);
  },
  beforeDestroy() {
    //キーコードによる動作の削除
    document.removeEventListener("keypress", this.keyAction);
  }
})