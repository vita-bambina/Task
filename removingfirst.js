function array(string){
    if (!string) return null
    let part = string.split(',');
    if (part.length <= 2){
        return null;
    }
    part.shift();
    part.pop();
    return part.join(' ')
    }

    console.log(array("1,2,3,7"))