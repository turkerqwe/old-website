const fetch = require('isomorphic-unfetch')

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/turkerpw/repos', {
        headers: {}
    })).json();

    let __ = await (await fetch('https://api.github.com/users/LenuxCode/repos', {
        headers: {}
    })).json();
    try {
        res.send([..._, ...__])
    } catch {
        res.status(500);
    }
}
