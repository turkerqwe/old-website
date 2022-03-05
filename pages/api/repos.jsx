const fetch = require('isomorphic-unfetch')

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/turkerpw/repos', {
        headers: {}
    })).json();

    let __ = await (await fetch('https://api.github.com/users/qweqweeqwewqeqweqeqeqwewsdjıasdah-----/repos', {
        headers: {}
    })).json();
    
    let ___ = await (await fetch('https://api.github.com/users/qweqweeqwewqeqweqeqeqwewsdjıasdah-----/repos', {
        headers: {}
    })).json();
    
    try {
        res.send([..._, ...__, ...___])
    } catch {
        res.status(500);
    }
}
