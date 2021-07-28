//--------------------------бесконечный скролл-------------------------

window.addEventListener('scroll', onScroll);
// в функцию onScroll прокидывается соответствующий вызов await fetch в качестве первого параметра и
// соответствующий рендеринг в качестве второго параметра

async function onScroll(fetch, render) {
  const documentRect = document.documentElement.getBoundingClientRect();

  if (documentRect.bottom <= document.documentElement.clientHeight + 150) {
    pageCounter += 1;

    let resultList = await fetch; //запрос следующей страницы
    render(resultList); // рендер результата нового запроса
  }
}
//--------------------------------------------------------
