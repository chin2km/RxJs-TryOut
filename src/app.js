import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $("#btn");
const output = $("#output");

const btnClickStream = Rx.Observable.fromEvent(btn, 'click');

const myArr = [1,2,3,4,5,6,7,8,9,10];

btnClickStream.subscribe(
    ({clientX, clientY}) => {
        output.append('X:', clientX, '  Y:', clientY);
    },
    (err) => {
        console.log(err);
    },
    () => {
        console.log('completed');
    }
)

const arrStream = Rx.Observable.from(myArr);

arrStream.subscribe(
    ele => {
        //console.log(ele)
    },
    err => {
        console.log(err)
    },
    () => {
        //console.log('complete')
    }
)
const intervalStream = Rx.Observable.interval(0).take(100);

intervalStream.subscribe(
    ele => {
        //console.log(ele)
    },
    err => {
        console.log(err)
    },
    () => {
        //console.log('complete')
    }
)