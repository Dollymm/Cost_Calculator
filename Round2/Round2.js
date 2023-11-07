//pangarm String Checker
function CheckPangram(str){
    const arr=new Array(26).fill(false);
    let index;
    for(let i=0;i<str.length;i++){
        if(str[i]>="A"&& str[i]<='Z')
        index=str.chartAt(i)-"A".charCodeAt(0)
        if(str[i]>="a"&& str[i]<='z')
        index=str.chartAt(i)-"a".charCodeAt(0)
    else continue;
    arr(index)=true;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==false) return false;
    }

    return true
}
CheckPangram('The quick brown fox jumps over a lazy dog')