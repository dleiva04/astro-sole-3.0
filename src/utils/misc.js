export function parseLink(header) {
    const output = {};
    const regex = /<([^>]+)>; rel="([^"]+)"/g;

    let m;
    while (m = regex.exec(header)) {
        const [_, v, k] = m;
        output[k] = v;
    }

    return output;
}