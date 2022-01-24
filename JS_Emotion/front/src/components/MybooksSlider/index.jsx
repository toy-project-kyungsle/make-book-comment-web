import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Favorites from '@atom/Favorite';
import { Container, Controller, Slides, SlidesViewer } from './styles';
import MyBooks from '@components/BookLinker';

function MybooksSlider() {
  const [mybooks] = useRecoilState(Favorites);
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 590);
  };

  const onClickR = () => {
    if (trans <= -(((mybooks.length - 4) / 2) * 590)) {
      return;
    }
    setTrans((current) => current - 590);
  };

  return (
    <Container>
      <SlidesViewer>
        <Slides trans={trans} bookCount={mybooks.length}>
          {mybooks.map((book) => {
            return (
              <MyBooks key={book.id} title={book.title} coverImg={book.coverLargeUrl} isbn={book.isbn} type="MyBooks" />
            );
          })}
        </Slides>
      </SlidesViewer>
      <Controller>
        <button className="Left" onClick={onClickL}>{`<`}</button>
        <button className="Right" onClick={onClickR}>
          {'>'}
        </button>
      </Controller>
    </Container>
  );
}

export default MybooksSlider;
