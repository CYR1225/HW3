function vectorAdd(a, b){
    var c = [];
    for(let i=0; i<a.length; i++) c[i] = a[i] + b[i];

    return c;
}

function matrixAdd(a, b){
    var res = [];

    for(let i=0; i<a.length; i++) res[i] = vectorAdd(a[i], b[i]);

    return res;
}