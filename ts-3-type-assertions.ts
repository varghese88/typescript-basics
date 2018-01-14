let message = 'abc';
let startWitha = (<string>message).startsWith('a');
let anotherWay = (message as string).startsWith('a');