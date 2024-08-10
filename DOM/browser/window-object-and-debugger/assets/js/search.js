export function findElementById(id, root = document.body) {
    if(root.id === id)
        return id

    for (let child of root.children) {
        let result = findElementById(id, child);
        if (result) return result;
    }

    return null
}

export function findFirstElementOfTag(tag, root = document.body) {
    // Return the first occurence of an element of tag name `tag`
    if(root.tagName.toLowerCase() === tag.toLowerCase())
        return root

    for(let child of root.children){
        let result = findFirstElementOfTag(tag, child);
        if(result) return result;
    }

    return null
}

export function findFirstElementOfClass(cls, root = document.body) {
    if(root.classList.contains(cls))
        return cls

    for(let child of root.children){
        let result = findFirstElementOfClass(cls, child);
        if (result) return result;
    }

    return null
}

export function findElementsOfTag(tag,  root = document.body) {
    // Return an array of elements that have a tag name of `tag`
    let elements = []

    if(root.tagName.toLowerCase() === tag.toLowerCase())
        elements.push(root)

    for(let child of root.children){
        elements = elements.concat(findElementsOfTag(tag, child))
    }

    return elements
}

export function findElementsOfClass(cls,  root = document.body) {
    // Return an array of elements that have are of class `cls`
    let elements = []

    if(root.classList.contains(cls))
        elements.push(root)

    for (let child of root.children) {
        elements = elements.concat(findElementsOfClass(cls, child));
    }

    return elements
}
