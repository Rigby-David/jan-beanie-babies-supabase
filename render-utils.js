export function renderBabies(beanie) {
    const li = document.createElement('li');
    const img = document.createElement('img');

    const div = document.createElement('div');
    const h2 = document.createElement('h2');

    const p = document.createElement('p');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    li.classList.add('card');
    div.classList.add('content');
    p.classList.add('attributes');

    img.src = beanie.image;
    h2.textContent = beanie.title;
    span1.textContent = beanie.theme;
    span2.textContent = beanie.astroSign;
    span3.textContent = beanie.releaseYear;
    p.append(span1, span2, span3);
    div.append(h2, p);
    li.append(img, div);

    return li;
}

export function renderOptions(beanie) {
    const option = document.createElement('option');

    option.value = beanie.name;
    option.textContent = beanie.name;

    return option;
}
