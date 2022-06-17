if (process.argv.length < 3)
    console.log('');
else
    console.log(lcs(process.argv.slice(2)));

function lcs(all_args)
{
    let short = all_args.reduce(
        (s1, s2) => s1.length <= s2.length ? s1 : s2
        );
    let maximum = short.length;
    for (let l = maximum; l >= 0; --l)
    {
        for (let begin = 0; begin <= maximum - l; begin++)
        {
            let sub = short.substring(begin, begin+l);
            if (all_args.every(elem => ~elem.indexOf(sub))) {
                return sub;
            }
        }
    }
    return '';
}