
export default (context, inject) => {

    inject('myLog', (msg) => {
        console.log('This is myLog: ' + msg);
    });

}