console.log(process.argv.length<3?'':p(process.argv.slice(2)));
function p(a)
{let s = a.reduce(
        (v, t) => v.length <= t.length ? v : t
        ),m = s.length
    for (let l = m;l>=0;--l)
    {
        for (let b = 0; b <= m - l;++b)
        {
            let m = s.substring(b, b+l)
            if (a.every(e => ~e.indexOf(m)))
                return m
        }
    }
}