function convertHTML(str) {
    const mapEntities = new Map([
            ['&', '&amp;'],
            ['<', '&lt;'],
            ['>', '&gt;'],
            ['"', '&quot;'],
            ["'", '&apos;']
        ]
    );
    return(str.split('').map((l) => {
        if(mapEntities.get(l)) return mapEntities.get(l)
        else return l
    }).join(''));
}

convertHTML("Dolce & Gabbana");