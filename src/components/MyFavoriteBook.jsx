import React from 'react'
import style from "../style/book_style.module.css"
import "../style/App.css"

export default function MyFavoriteBook() {
  return (
    <div className="container">
      <div className="img_container">
        <img src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/6/1/616607_front.jpg" alt="" className={style.book_img} />
        <div>
          <h1>Моя улюблена книга</h1>
          <p className={style.name_book}>Відьмак. Останнє бажання.</p>
          <p className={style.author}>Автор: Анджей Сапковський</p>
          <p className={style.genre}>Жанр: фентезі</p>
          <p className={style.page}>259 сторінок</p>
            <div>
              <p>Рецензії:</p>
              <p>
              <a href="https://fanfic.com.ua/fanfic/%D1%80%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D1%96%D1%8F-%D0%BD%D0%B0-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8-%D0%B2%D1%96%D0%B4%D1%8C%D0%BC%D0%B0%D0%BA-%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%94-%D0%B1%D0%B0%D0%B6/">
                  Книга, що змінила представлення про фентезійну літературу.
                </a>
              </p>
              <p>
                <a href="https://cases.media/en/article/recenziya-na-knigu-vidmak-ostannye-bazhannya">Відьмак. Останнє бажання.</a>
              </p>
              <p>
                <a href="https://findbook.com.ua/bookreview/vidmak-ostannye-bazhannya">Відьмак. Останнє бажання.</a>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}
//  назву книги, ПІБ автора, жанр книги, кількість сторінок і декілька рецензій до книги
